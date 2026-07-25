# CareTrack V1 — Build Prompt

**Cara pakai:** tempel seluruh isi di bawah garis ini ke Claude Code (atau AI builder lain), bersama dengan file `CareTrack_V1_Design_Blueprint.md` dan PRD sebagai lampiran.

**Sebelum menempel, putuskan dulu:**
1. Ganti `CareTrack` dengan nama final jika sudah ada.
2. Jika V1 = **prototype UI saja**, hapus Bagian 3, 4, 5 dan Bagian 9 poin backend, lalu ganti seluruh pemanggilan API dengan mock data statis di `lib/mock/`.
3. Konfirmasi model status di Bagian 2 Design Blueprint sudah disetujui — prompt ini mengasumsikan ya.

---

# PROMPT

Kamu adalah senior full-stack engineer yang membangun **CareTrack V1**, aplikasi manajemen tugas perawatan pasien untuk panti lansia dan layanan home care di Indonesia.

Baca `PRD_CareTrack.md` dan `CareTrack_V1_Design_Blueprint.md` sebelum menulis kode. Ketika keduanya bertentangan, **Design Blueprint menang** — dokumen itu memuat koreksi terhadap PRD.

## 1. Aturan main

- Jangan menulis kode sebelum menyelesaikan Bagian 9 (Rencana Eksekusi) dan menunjukkannya kepadaku.
- Jika ada requirement yang ambigu, **tanyakan**. Jangan menebak lalu melanjutkan. Daftar hal yang belum diputuskan ada di Bagian 6 Design Blueprint.
- Jangan menambah fitur di luar daftar Bagian 2. Apa pun yang ada di "Should Have", "Could Have", atau "Won't Have" pada §35 PRD tidak dibangun sekarang.
- Setiap keputusan teknis yang tidak tertulis di dokumen mana pun, catat di `docs/DECISIONS.md` dengan alasannya.
- Bahasa antarmuka: **Bahasa Indonesia**. Bahasa kode, nama variabel, tabel, dan komentar: **Inggris**. Jangan campur.

## 2. Ruang lingkup V1

**Dibangun:**

| Area | Cakupan |
|---|---|
| Auth | Login, logout, refresh token, lupa kata sandi, RBAC 4 role |
| Role | `nurse`, `head_nurse`, `admin`, `patient` |
| Master data | Units, Rooms, Task Types, Shifts, Users, Nurses, Patients |
| Penugasan | Perawat ↔ pasien per shift, peran utama/pendamping, perhitungan beban kerja |
| Tugas | CRUD, mulai, selesaikan, tunda, alihkan, batalkan, pola berulang |
| Status | Model kanonik: lifecycle 4 nilai + timing_state terhitung |
| Dashboard | Perawat, kepala perawat, pasien, admin |
| Riwayat | Immutable + alur koreksi dengan persetujuan |
| Notifikasi | In-app + push (Web Push), dengan deduplikasi |
| Serah terima | Ringkasan otomatis + catatan + konfirmasi |
| Nurse call | Permintaan, penerimaan, penyelesaian, eskalasi berbasis waktu |
| Laporan | Laporan perawat & unit, filter, ekspor CSV |
| Audit log | Seluruh aksi yang mengubah data |
| PWA | Installable, cache read-only, antrean tulis offline, sinkronisasi |

**Tidak dibangun:** diagnosis, dosis obat, farmasi, stok, billing, asuransi, lab, telemedicine, rekam medis elektronik penuh, integrasi alat kesehatan, chat, video, multi-lokasi, ekspor PDF, lampiran foto, QR pasien.

## 3. Stack

```
Backend    FastAPI (Python 3.12) · SQLAlchemy 2.0 · Alembic · Pydantic v2
Database   PostgreSQL 16
Auth       JWT access (15 mnt) + refresh (7 hari, httpOnly cookie, rotasi)
Scheduler  APScheduler dalam proses terpisah (bukan di worker web)
Frontend   Next.js 15 App Router · TypeScript · Tailwind · shadcn/ui
State      TanStack Query (polling) + Zustand untuk state UI lokal
Offline    Service worker + IndexedDB untuk antrean tulis
Test       pytest (backend) · Vitest + Testing Library (frontend) · Playwright (E2E)
Dev        Docker Compose: api, db, scheduler, web
```

Real-time V1 menggunakan **polling**, bukan WebSocket: `refetchInterval` 15 detik untuk alert, 30 detik untuk dashboard, 60 detik untuk daftar sekunder. Hentikan polling saat tab tidak aktif. WebSocket ditunda ke Tahap 3.

## 4. Model data

Turunkan dari §29 PRD **dengan seluruh koreksi di Bagian 1 Design Blueprint**. Yang wajib berbeda dari PRD:

### Tabel baru

```sql
task_types
  id, code, name, default_tolerance_minutes, default_lead_minutes,
  default_reminder_minutes, default_duration_minutes, requires_completion_note,
  is_active, created_at, updated_at

task_recurrences
  id, patient_id, task_type_id, title, instruction, priority,
  default_nurse_id NULL, time_of_day, rrule TEXT, starts_on, ends_on NULL,
  tolerance_minutes NULL, is_active, created_by, created_at, updated_at

task_corrections
  id, task_id, requested_by, field_name, old_value JSONB, new_value JSONB,
  reason TEXT NOT NULL, status, reviewed_by NULL, reviewed_at NULL,
  review_note NULL, created_at
```

### Perubahan pada tabel yang sudah ada

```sql
care_tasks
  -- WAJIB ditambahkan:
  unit_id            NOT NULL   -- snapshot, jangan join lewat pasien
  shift_id           NULL       -- diisi saat pembuatan berdasarkan scheduled_at
  room_snapshot      TEXT       -- kamar saat tugas dibuat, agar riwayat tidak berubah
  recurrence_id      NULL
  source             ENUM('manual','recurring')
  lifecycle_status   ENUM('scheduled','in_progress','completed','cancelled')
  completion_outcome ENUM('on_time','late') NULL
  lead_minutes       INT
  reminder_minutes   INT
  postpone_count     INT DEFAULT 0
  postpone_reason    TEXT NULL
  original_scheduled_at TIMESTAMPTZ NULL
  reassign_reason    TEXT NULL
  reassigned_from    UUID NULL
  completed_at_client TIMESTAMPTZ NULL
  synced_at          TIMESTAMPTZ NULL
  recorded_offline   BOOLEAN DEFAULT false
  needs_review       BOOLEAN DEFAULT false
  client_generated_id UUID UNIQUE NULL   -- idempotensi sinkronisasi offline
  version            INT DEFAULT 1        -- optimistic locking

  -- HAPUS: kolom `status` versi lama yang mencampur lifecycle & timing

patients
  user_id        NULLABLE          -- mayoritas pasien tidak punya akun
  portal_enabled BOOLEAN DEFAULT false

shifts
  starts_at TIMESTAMPTZ NOT NULL
  ends_at   TIMESTAMPTZ NOT NULL   -- boleh melewati tengah malam
  -- HAPUS kolom `date`; "hari operasional" = tanggal starts_at di zona waktu unit

nurse_calls
  unit_id, escalated_at NULL, escalation_level INT DEFAULT 0,
  cancelled_at NULL, note NULL

notifications
  entity_type, entity_id      -- ganti task_id agar generik
  channel, sent_at NULL, dedupe_key UNIQUE

audit_logs
  old_value JSONB, new_value JSONB
```

### Aturan waktu (tidak bisa ditawar)

- Semua kolom waktu bertipe `TIMESTAMPTZ`, disimpan UTC.
- Zona waktu tampilan berasal dari `units.timezone` (default `Asia/Jakarta`), bukan dari perangkat.
- Jangan pernah menghitung status berdasarkan jam perangkat klien.

### Aturan integritas

- Tidak ada `DELETE` fisik pada `care_tasks`, `task_logs`, `audit_logs`, `handover_reports`, `nurse_calls`. Gunakan status atau `archived_at`.
- Setiap perubahan status tugas **harus** menulis satu baris `task_logs` dalam transaksi yang sama.
- Setiap operasi yang mengubah data **harus** menulis `audit_logs`.

## 5. Logika status — implementasikan persis seperti ini

`timing_state` **tidak pernah disimpan**. Hitung di query dan di sisi klien.

```python
def timing_state(now, scheduled_at, lead_minutes, tolerance_minutes):
    if now < scheduled_at - timedelta(minutes=lead_minutes):
        return "far"
    if now < scheduled_at:
        return "upcoming"
    if now <= scheduled_at + timedelta(minutes=tolerance_minutes):
        return "due"
    return "overdue"
```

`completion_outcome` dihitung sekali, saat penyelesaian:

```python
outcome = "late" if completed_at > scheduled_at + timedelta(minutes=tolerance_minutes) else "on_time"
```

Label UI diturunkan dari matriks di Bagian 2.3 Design Blueprint. Setiap label wajib punya **warna + teks + ikon**.

Scheduler **hanya** mengerjakan tiga hal. Ia tidak pernah mengubah status tugas:
1. Membangkitkan tugas dari `task_recurrences` (harian, 03.00 waktu unit, idempoten)
2. Mengirim notifikasi pengingat dan keterlambatan
3. Mengeskalasi nurse call dan serah terima yang lewat SLA

## 6. Aturan bisnis yang wajib ditegakkan di backend

Validasi di frontend adalah kemudahan, bukan keamanan. Semua aturan berikut ditegakkan di API.

| ID | Aturan |
|---|---|
| BR-01 | Perawat hanya bisa membaca dan mengubah data pasien yang ditugaskan kepadanya pada shift aktif |
| BR-02 | Hanya satu perawat yang bisa memulai satu tugas. Percobaan kedua ditolak `409 Conflict` |
| BR-03 | Penyelesaian tugas wajib memuat hasil tindakan, kondisi pasien, dan checkbox konfirmasi |
| BR-04 | Jika `timing_state = overdue` saat penyelesaian, catatan dan alasan keterlambatan wajib diisi |
| BR-05 | Penundaan pertama boleh oleh perawat. Penundaan kedua dan seterusnya butuh persetujuan kepala perawat |
| BR-06 | Waktu penundaan baru tidak boleh melewati `shifts.ends_at` |
| BR-07 | Pengalihan tugas wajib menyertakan alasan |
| BR-08 | Pembatalan tugas hanya oleh `head_nurse` atau `admin`, dengan alasan wajib |
| BR-09 | `completed` dan `cancelled` bersifat final. Tidak ada transisi keluar kecuali lewat `task_corrections` |
| BR-10 | `started_at`, `completed_at`, dan `assigned_nurse_id` pada tugas selesai tidak dapat dikoreksi |
| BR-11 | Koreksi riwayat wajib disetujui `head_nurse` atau `admin`. Versi lama diarsipkan, tidak ditimpa |
| BR-12 | Pasien hanya bisa membaca datanya sendiri. Tidak ada endpoint yang mengembalikan pasien lain |
| BR-13 | Satu pasien maksimal satu perawat utama per shift. Pendamping boleh lebih dari satu |
| BR-14 | Beban kerja berlebih menghasilkan peringatan, bukan blokir |
| BR-15 | Nurse call aktif memblokir pembuatan panggilan baru dari pasien yang sama |
| BR-16 | Nurse call tanpa perawat aktif di unit dialihkan ke kepala perawat |
| BR-17 | Serah terima tidak bisa dikirim jika masih ada tugas `in_progress` di shift tersebut |
| BR-18 | Perubahan pada `task_recurrences` tidak mengubah tugas yang sudah dibangkitkan |
| BR-19 | Sinkronisasi offline bersifat idempoten lewat `client_generated_id` |
| BR-20 | Tugas yang disinkron lebih dari 2 jam setelah `completed_at_client` ditandai `needs_review = true` |
| BR-21 | Perubahan bersamaan pada satu tugas ditangani optimistic locking lewat `version`; konflik → `409` |
| BR-22 | Notifikasi dengan `dedupe_key` sama dalam 1 jam tidak dikirim ulang |
| BR-23 | Ekspor laporan dibatasi per role dan dicatat di audit log |

## 7. API

Ikuti §30 PRD, tambahkan:

```
POST   /tasks/{id}/postpone
POST   /tasks/{id}/reassign
GET    /task-recurrences
POST   /task-recurrences
PUT    /task-recurrences/{id}
POST   /task-recurrences/{id}/stop
GET    /task-corrections
POST   /tasks/{id}/corrections
POST   /task-corrections/{id}/approve
POST   /task-corrections/{id}/reject
GET    /nurse-calls
POST   /nurse-calls
POST   /nurse-calls/{id}/accept
POST   /nurse-calls/{id}/complete
POST   /sync/tasks                 # batch, idempoten via client_generated_id
GET    /task-types
GET    /shifts/current
```

Konvensi:
- Semua daftar mendukung `?page=&page_size=&sort=` dan mengembalikan `{ data, meta: { total, page, page_size } }`
- Error mengikuti bentuk `{ error: { code, message, field?, details? } }` dengan `message` berbahasa Indonesia siap tampil
- Setiap response tugas menyertakan `timing_state` dan `display_status` yang sudah dihitung server, agar klien dan server tidak pernah berbeda pendapat soal keterlambatan

## 8. Arah desain

Jangan pakai template dashboard admin generik. Produk ini dipakai sambil berdiri, sambil berjalan, di bawah lampu neon, oleh orang yang sedang terburu-buru. Keterbacaan mengalahkan estetika, tapi bukan berarti boleh jelek.

**Palet** — turunkan sebagai CSS variable, jangan hardcode:

```
--ink        #0F1F26   teks utama, petrol gelap
--surface    #F6F8F7   latar halaman
--card       #FFFFFF
--line       #DDE3E1
--primary    #0E6B6B   aksi utama, teal institusional
--due        #B26B00   "Waktunya", amber
--overdue    #B02E1F   "Terlambat", bata
--done       #3A7D5C   "Selesai", hijau teredam
--muted      #6B7C80   label sekunder
```

Rasio kontras minimal 4.5:1 untuk teks, 3:1 untuk elemen grafis. Uji semuanya.

**Tipografi:**
- Antarmuka & judul: **Instrument Sans**
- Angka waktu, durasi, ID, tabel: **IBM Plex Mono** dengan `font-variant-numeric: tabular-nums`

Alasannya: waktu adalah data utama produk ini. Angka jam harus sejajar secara vertikal di daftar tugas agar bisa dipindai sekali lihat. Ini bukan dekorasi.

**Elemen tanda pengenal — "rel waktu":**
Timeline shift dirender sebagai rel vertikal dengan penanda "sekarang" yang bergerak nyata setiap menit. Kartu tugas terpasang di rel sesuai jamnya. Tugas yang lewat memudar; tugas yang sedang jatuh tempo menempel pada penanda. Ini satu-satunya tempat animasi diizinkan. Hormati `prefers-reduced-motion` — saat aktif, penanda tetap berpindah tapi tanpa transisi.

Sisanya tenang: tanpa gradien, tanpa bayangan tebal, tanpa ikon dekoratif, `border-radius` konsisten 8px, spasi kelipatan 4px.

**Aturan yang tidak boleh dilanggar:**
- Target sentuh minimal 44×44px; antarmuka pasien minimal 56×56px
- Status tidak pernah dibedakan hanya lewat warna
- Tidak ada scroll horizontal di halaman utama mana pun
- Setiap layar punya empty state dan error state yang menjelaskan langkah berikutnya, bukan sekadar "Terjadi kesalahan"
- Sidebar setinggi layar penuh, sticky, bisa di-collapse, hilang di mobile
- Mobile pakai bottom navigation maksimal 5 item
- Fokus keyboard terlihat jelas di semua elemen interaktif

**Copywriting:**
Kata kerja aktif, sentence case, dan nama aksi yang konsisten dari tombol sampai toast. Tombol "Selesaikan Tindakan" menghasilkan toast "Tindakan selesai". Pesan error menjelaskan apa yang gagal dan apa yang harus dilakukan, tidak minta maaf, tidak samar.

## 9. Rencana eksekusi

Tunjukkan rencana ini kepadaku sebelum menulis baris kode pertama.

| Fase | Isi | Selesai jika |
|---|---|---|
| 0 | Docker Compose, struktur repo, konfigurasi, CI dasar | `docker compose up` menyalakan 4 service |
| 1 | Skema DB + migrasi Alembic + seed (1 unit, 6 kamar, 10 jenis tindakan, 3 shift, 4 user, 8 pasien, 60 tugas) | `alembic upgrade head` + seed berjalan bersih |
| 2 | Auth, RBAC, audit log | Tes: setiap role hanya bisa mengakses miliknya |
| 3 | Master data + penugasan + beban kerja | CRUD lengkap, BR-13 dan BR-14 lulus tes |
| 4 | Mesin tugas: CRUD, status, mulai, selesai, tunda, alihkan, batal | BR-02 sampai BR-09 lulus tes |
| 5 | Pola berulang + scheduler | Jalankan 3× berturut-turut, tidak ada tugas ganda |
| 6 | Dashboard perawat (`/tasks`) | Zona 1–7 Bagian 5.1 Design Blueprint tampil dan responsif |
| 7 | Dashboard kepala perawat (`/operations`) + laporan | Alert bisa ditindaklanjuti langsung dari dashboard |
| 8 | Riwayat + koreksi berversi | BR-10, BR-11 lulus tes |
| 9 | Notifikasi in-app + Web Push + deduplikasi | BR-22 lulus tes |
| 10 | Serah terima | BR-17 lulus tes, ringkasan otomatis benar |
| 11 | Nurse call + eskalasi | BR-15, BR-16 lulus tes |
| 12 | Dashboard pasien | Uji dengan simulasi keterbatasan penglihatan |
| 13 | PWA, cache, antrean offline, sinkronisasi | BR-19, BR-20 lulus tes; matikan jaringan, selesaikan tugas, nyalakan, data masuk sekali |
| 14 | Aksesibilitas, E2E, pengerasan keamanan | Audit aksesibilitas otomatis bersih, 4 alur E2E hijau |

Setelah setiap fase: jalankan seluruh test suite, laporkan hasilnya, dan berhenti untuk review. Jangan menumpuk beberapa fase dalam satu kali kerja.

## 10. Definition of done V1

- [ ] Empat dashboard role berfungsi dengan data terpisah dan benar
- [ ] Satu perawat menangani 5 pasien tanpa data tercampur
- [ ] Status berubah berdasarkan waktu tanpa cron dan tanpa reload halaman
- [ ] Tugas terlambat wajib beralasan, dan alasannya masuk riwayat
- [ ] Riwayat tidak bisa dihapus lewat jalur mana pun, termasuk API langsung
- [ ] Koreksi menghasilkan dua versi, bukan satu yang tertimpa
- [ ] Pola berulang membangkitkan tugas H+1 secara idempoten
- [ ] Penyelesaian offline tersinkron sekali, tanpa duplikat
- [ ] Serah terima menyusun ringkasan otomatis yang angkanya cocok dengan laporan
- [ ] Nurse call tereskalasi otomatis sesuai SLA
- [ ] Tidak ada informasi penting yang hanya dibedakan lewat warna
- [ ] Tidak ada scroll horizontal di 360px
- [ ] Seluruh aksi pengubah data muncul di audit log
- [ ] Dashboard termuat di bawah 3 detik pada koneksi 3G tersimulasi
- [ ] `docs/DECISIONS.md` memuat setiap keputusan teknis yang tidak tertulis di PRD

## 11. Yang harus kamu tanyakan sebelum mulai

Jangan menebak lima hal ini:

1. Apakah dashboard pasien masuk V1 atau ditunda?
2. Berapa toleransi keterlambatan final per jenis tindakan?
3. Apakah kebijakan `needs_review` untuk sinkronisasi offline (BR-20) diterima?
4. Nama produk final untuk dipakai di nama paket, judul PWA, dan seed data?
5. Target deployment: VPS sendiri atau layanan terkelola? Ini mengubah konfigurasi Docker dan strategi backup.
