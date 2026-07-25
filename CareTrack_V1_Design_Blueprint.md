# CareTrack V1 — Design Blueprint

**Turunan dari:** PRD CareTrack v1.0
**Isi:** Koreksi PRD → Model status kanonik → Sitemap → User flow → Struktur dashboard → Open questions
**Status dokumen:** Draft untuk review
**Tanggal:** 25 Juli 2026

---

## 0. Cara membaca dokumen ini

Setiap pernyataan diberi label tingkat bukti:

| Label | Arti |
|---|---|
| **[V]** Verified | Tertulis eksplisit di PRD |
| **[A]** Assumption | Interpretasi wajar dari PRD, belum dikonfirmasi |
| **[P]** Proposal | Rekomendasi baru, belum disetujui |
| **[K]** Konflik | Dua bagian PRD saling bertentangan |

Bagian 1 dan 2 **harus diputuskan sebelum coding**, karena keduanya mengubah skema database. Sisanya bisa berjalan paralel.

### Asumsi kerja utama

| # | Asumsi | Dampak jika salah |
|---|---|---|
| A-1 | "V1" = **Tahap 2 MVP** (daftar Must Have §35), bukan prototype UI saja | Kalau maksudnya prototype klikabel saja, seluruh bagian backend di prompt coding dibuang dan diganti mock data |
| A-2 | Belum ada klien spesifik. Ini produk sendiri, PRD adalah asumsi internal, bukan hasil wawancara panti/klinik | Semua business rule di PRD masih **[A]**, bukan **[V]**. Belum boleh dianggap kebutuhan lapangan yang terverifikasi |
| A-3 | Deployment awal: **satu unit, satu lokasi, satu zona waktu** | Multi-unit dan multi-timezone di Tahap 4 |
| A-4 | Stack mengikuti pola yang sudah dipakai: FastAPI + PostgreSQL backend, Next.js + Tailwind frontend | Bisa diganti, tapi keputusan harus diambil sebelum prompt coding dijalankan |

> **Catatan penting.** PRD ini sangat rapi secara struktur, tapi seluruh isinya masih berada di Level 3–4 (asumsi/proposal). Tidak ada satu pun aturan yang berasal dari SOP panti, wawancara perawat, atau observasi shift nyata. Sebelum MVP masuk ke lapangan, minimal 3 hal wajib divalidasi ke perawat asli: **toleransi keterlambatan per jenis tindakan**, **isi wajib serah terima**, dan **apakah pasien lansia benar-benar akan memakai dashboard pasien**. Selebihnya boleh jalan dengan asumsi.

---

## 1. Koreksi terhadap PRD sebelum implementasi

### 1.1 Yang mengubah skema database (blocking)

**G-01 — Status tugas mencampur dua konsep berbeda [K]**
§14.4 menempatkan `Terjadwal`, `Akan Datang`, `Waktunya`, `Sedang Dilakukan`, `Selesai`, `Terlambat`, `Ditunda`, `Dibatalkan`, `Dialihkan` dalam satu enum.
Masalahnya: `Terlambat` adalah kondisi **waktu**, bukan kondisi **siklus hidup**. Sebuah tugas bisa `Sedang Dilakukan` **dan** terlambat pada saat yang sama — enum tunggal tidak bisa merepresentasikan itu. Kalau dipaksakan, developer akan menimpa `in_progress` dengan `overdue` lewat cron job dan riwayat tindakan jadi rusak.
→ **Solusi di Bagian 2.**

**G-02 — `Dialihkan` dan `Ditunda` bukan status, tapi peristiwa [P]**
Setelah tugas dialihkan ke perawat lain, tugasnya tetap harus dikerjakan — statusnya kembali `Terjadwal`, hanya `assigned_nurse_id` yang berubah. Sama halnya dengan `Ditunda`: setelah ditunda, tugas kembali terjadwal di waktu baru. Menyimpannya sebagai status permanen membuat tugas hilang dari daftar kerja perawat.
→ Simpan sebagai baris di `task_logs` + counter di tabel tugas. Badge UI tetap muncul.

**G-03 — Tabel `task_types` tidak ada [K]**
§29 `Care Tasks` mereferensikan `task_type_id`, tapi tabel `Task Types` tidak pernah didefinisikan. Padahal §14.1 mendaftar 10 kategori dan §14.5 menyatakan toleransi keterlambatan berbeda per jenis tugas — artinya toleransi harus tinggal di tabel ini.

**G-04 — Recurring task tidak punya entitas data [K]**
§16 mewajibkan tugas berulang (setiap hari, hari tertentu, setiap beberapa jam, sampai dihentikan). Tidak ada tabel yang menyimpan pola pengulangan. Tanpa ini, jadwal obat harian harus diinput manual setiap hari — yang justru masalah yang mau diselesaikan produk ini.

**G-05 — `care_tasks` tidak terhubung ke shift dan unit [K]**
§18.3 menjanjikan "sistem mengisi ringkasan otomatis" untuk serah terima, dan §22.2 menjanjikan laporan per shift. Keduanya mustahil dihitung karena tugas tidak punya `shift_id` maupun `unit_id`. Jangan andalkan join lewat pasien → kamar → unit, karena pasien bisa pindah kamar dan riwayat lama akan ikut berubah.

**G-06 — `patients.user_id` tidak boleh wajib [P]**
§29 mengharuskan setiap pasien punya akun user. Di panti lansia, mayoritas penghuni tidak akan pernah login. Memaksa pembuatan akun berarti admin membuat ratusan akun mati yang justru jadi risiko keamanan.
→ `user_id` nullable + flag `portal_enabled`.

**G-07 — Koreksi riwayat tidak punya tempat penyimpanan [K]**
§21.2 mendefinisikan alur koreksi berversi (data lama tetap tersimpan, data baru jadi versi aktif). Tidak ada tabel untuk itu di §29.

**G-08 — Alasan pengalihan tidak punya kolom [K]**
§17 aturan 5 mewajibkan alasan pengalihan. §14.2 hanya menyediakan `delay_reason` dan `cancellation_reason`.

### 1.2 Yang mengubah logika, bukan skema

**G-09 — Konflik lead time [K]**
§14.4 menyatakan status `Akan Datang` muncul 30 menit sebelum jadwal. §19.1 menyatakan notifikasi dikirim 15 menit sebelum jadwal. Dua angka berbeda untuk konsep yang sama.
→ Pisahkan jadi dua parameter berbeda dan konfigurasikan per jenis tugas: `lead_minutes` (untuk perubahan status) dan `reminder_minutes` (untuk notifikasi). Default usulan: 30 dan 15.

**G-10 — Contoh toleransi bertentangan dengan tabelnya sendiri [K]**
§14.5 memberi contoh jadwal 08.00 dengan batas terlambat 08.30 (toleransi 30 menit), lalu di paragraf berikutnya menyatakan toleransi pemberian obat adalah 15 menit — padahal contoh tersebut adalah pemberian obat.
→ Buat satu tabel toleransi kanonik dan hapus contoh yang bertabrakan. **Angka toleransi ini wajib divalidasi ke perawat asli sebelum rilis** — ini bukan keputusan desainer.

**G-11 — Nilai "Terbatas" di matriks hak akses tidak terdefinisi [K]**
§8 memberi nilai `Terbatas` pada 4 sel (perawat mengubah data pasien, perawat membuat tugas, kepala perawat mengubah tugas selesai, kepala perawat membuat akun). Tanpa definisi, developer akan menebak, dan hasil tebakannya jadi kebijakan de-facto.
→ Definisi usulan **[P]**:
- Perawat mengubah data pasien → hanya `special_notes` dan catatan observasi, tidak boleh identitas/kamar/status
- Perawat membuat tugas → hanya tugas ad-hoc untuk pasien yang ditugaskan kepadanya, pada shift berjalan, tanpa recurring
- Kepala perawat mengubah tugas selesai → hanya lewat alur koreksi (§21.2), tidak boleh edit langsung
- Kepala perawat membuat akun → hanya role Perawat, di unitnya sendiri

**G-12 — Offline sync vs riwayat yang tidak bisa dimanipulasi [K]**
FR-14/15 mengizinkan penyelesaian tugas saat offline, lalu disinkronkan. §21 dan §32 menuntut riwayat autentik dan metrik "tepat waktu" yang akurat. Kalau `completed_at` diambil dari jam perangkat, perawat bisa mengubah jam HP untuk menghindari status terlambat.
→ Simpan dua kolom: `completed_at_client` (dari perangkat) dan `synced_at` (dari server), plus flag `recorded_offline`. Metrik ketepatan waktu resmi memakai `completed_at_client` **tetapi** tugas yang disinkron > 2 jam setelah waktu klaim ditandai `needs_review`. Jangan diam-diam memilih salah satu.

**G-13 — Zona waktu dan shift lintas tengah malam [A]**
Shift malam (misal 22.00–06.00) melintasi dua tanggal. Kolom `shifts.date` jadi ambigu: tanggal mulai atau tanggal selesai? Serah terima dan laporan harian akan salah hitung.
→ Simpan `starts_at`/`ends_at` sebagai `timestamptz` UTC, buang kolom `date` terpisah, dan definisikan "hari operasional" = tanggal `starts_at` di zona waktu unit.

**G-14 — Tidak ada aturan siapa boleh menunda dan membatalkan [K]**
Matriks §8 tidak menyebut aksi `Tunda` dan `Batalkan` sama sekali, padahal §14.4 mendefinisikan keduanya. Untuk tugas pemberian obat, ini bukan detail kecil.
→ Usulan **[P]**: perawat boleh menunda maksimal 1× dengan alasan wajib; penundaan kedua dan seluruh pembatalan butuh kepala perawat.

**G-15 — SLA nurse call tidak terukur [K]**
§19.2 menyebut alert "pasien memanggil terlalu lama" tanpa mendefinisikan berapa lama.
→ Usulan **[P]**: eskalasi ke kepala perawat jika belum diterima dalam 5 menit, alert kedua jika belum selesai dalam 15 menit. Angka wajib divalidasi.

### 1.3 Risiko di luar produk

**G-16 — Data kesehatan dan kepatuhan [P]**
PRD tidak menyinggung UU 27/2022 (PDP) maupun PP 71/2019. Data pasien di panti/klinik adalah data pribadi spesifik. Untuk V1 yang belum masuk produksi ini belum blocking, tapi tiga hal harus sudah ada di MVP karena mahal untuk ditambal belakangan: **enkripsi at-rest**, **retensi audit log yang eksplisit**, dan **pembatasan ekspor** (§28 sudah menyebutnya, tinggal ditegakkan). Konsultasi hukum diperlukan sebelum klien pertama, bukan sebelum baris kode pertama.

---

## 2. Model status kanonik (pengganti §14.4)

Ini adalah koreksi paling penting di seluruh dokumen. Semua UI, API, dan laporan diturunkan dari sini.

### 2.1 Tiga dimensi terpisah

```
lifecycle_status   (disimpan di DB — hanya 4 nilai)
  scheduled | in_progress | completed | cancelled

timing_state       (dihitung saat dibaca — tidak pernah disimpan)
  far | upcoming | due | overdue

completion_outcome (disimpan sekali saat penyelesaian)
  on_time | late | null
```

### 2.2 Rumus timing_state

```
T = scheduled_at
L = task_type.lead_minutes        (default 30)
G = task.tolerance_minutes        (turunan dari task_type, boleh dioverride)

far      : now <  T - L
upcoming : T - L <= now < T
due      : T <= now <= T + G
overdue  : now > T + G
```

`timing_state` tidak pernah ditulis ke database dan tidak butuh cron job. Ia dihitung di query. Cron job hanya dipakai untuk **mengirim notifikasi** dan **membangkitkan tugas berulang**, bukan untuk mengubah status.

### 2.3 Matriks label UI

| lifecycle | timing | Label yang tampil | Warna |
|---|---|---|---|
| scheduled | far | Terjadwal | netral |
| scheduled | upcoming | Akan Datang | biru |
| scheduled | due | **Waktunya** | amber |
| scheduled | overdue | **Terlambat** | merah |
| in_progress | far / upcoming / due | Sedang Dilakukan | teal |
| in_progress | overdue | Sedang Dilakukan · lewat batas | teal + strip merah |
| completed | — | Selesai | hijau |
| completed (outcome=late) | — | Selesai Terlambat | hijau + strip amber |
| cancelled | — | Dibatalkan | abu |

Badge tambahan yang berdiri sendiri, bukan status: `Ditunda 1×`, `Dialihkan`, `Dicatat offline`, `Perlu review`.

Sesuai §24.2 dan §25 poin 4: setiap baris di atas wajib punya **warna + label teks + ikon**. Warna tidak boleh jadi satu-satunya pembeda.

### 2.4 Transisi yang diizinkan

```
scheduled ──start──────► in_progress ──complete──► completed
    │                          │
    │                          └──cancel──────────► cancelled   (butuh kepala perawat)
    ├──postpone─► scheduled (scheduled_at baru, postpone_count++)
    ├──reassign─► scheduled (assigned_nurse_id baru)
    └──cancel───► cancelled                                     (butuh kepala perawat)

completed ──correction request──► completed (versi baru, versi lama diarsipkan)
```

Yang **tidak** diizinkan: `completed → in_progress`, `cancelled → apa pun`, dan penghapusan baris apa pun.

---

## 3. Sitemap

Notasi: `path` — nama halaman. `↳` = anak. Tanda `◆` = halaman yang jadi target deep-link dari notifikasi.

### 3.1 Publik

```
/login                          Masuk
/forgot-password                Lupa kata sandi
/reset-password                 Atur ulang kata sandi
/offline                        Layar offline PWA
```

### 3.2 Root & resolusi role

```
/                               Redirect berdasarkan role:
                                  nurse       → /tasks
                                  head_nurse  → /operations
                                  admin       → /admin
                                  patient     → /me
```

> Perawat mendarat di `/tasks`, bukan `/dashboard`. Alasannya: §5.2 poin 1 menuntut perawat tahu tugas berikutnya dalam <5 detik. Halaman ringkasan statistik adalah lapisan tambahan sebelum informasi yang dicari. Kartu statistik tetap ada, tapi di atas daftar tugas — bukan di halaman terpisah. **[P]**

### 3.3 Perawat

```
/tasks                          ◆ Tugas Saya  ← halaman utama perawat
  ↳ /tasks/:id                  ◆ Detail Tugas
    ↳ /tasks/:id/complete       Form Penyelesaian (halaman penuh di mobile, drawer di desktop)
/patients                       Pasien Saya
  ↳ /patients/:id               Detail Pasien
     tab: ringkasan | jadwal | riwayat | catatan | perawat | info
/calendar                       Kalender  (harian & mingguan; drag-drop nonaktif)
/history                        Riwayat Tindakan Saya
/handover                       ◆ Serah Terima
  ↳ /handover/:id               Detail Serah Terima
/notifications                  ◆ Notifikasi
/profile                        Profil & Pengaturan Akun
```

Menu bawah mobile (maks 5, §23.4): **Tugas · Pasien · Kalender · Notifikasi · Lainnya**
`Lainnya` memuat: Riwayat, Serah Terima, Profil, Keluar.

### 3.4 Kepala Perawat

```
/operations                     ◆ Papan Operasional  ← halaman utama
/tasks                          Semua Tugas (unit)
  ↳ /tasks/:id                  ◆ Detail Tugas
  ↳ /tasks/new                  Buat Tugas
  ↳ /tasks/recurring            Pola Tugas Berulang
     ↳ /tasks/recurring/:id     Detail Pola
/patients                       Pasien Unit
  ↳ /patients/new               Tambah Pasien
  ↳ /patients/:id               Detail Pasien
/nurses                         Perawat Unit
  ↳ /nurses/:id                 Detail & Beban Kerja Perawat
/assignments                    Penugasan Pasien
  ↳ /assignments/new            Buat Penugasan
/calendar                       Kalender (drag-drop aktif di desktop)
/handover                       Pemantauan Serah Terima
  ↳ /handover/:id               Detail
/corrections                    ◆ Persetujuan Koreksi Riwayat
/reports                        Laporan
  ↳ /reports/tasks              Laporan Tugas
  ↳ /reports/nurses             Laporan Perawat
  ↳ /reports/patients           Laporan Pasien
  ↳ /reports/units              Laporan Unit
/settings                       Pengaturan Unit (toleransi, definisi shift, aturan eskalasi)
/notifications                  ◆ Notifikasi
/profile                        Profil
```

Menu bawah mobile: **Operasional · Tugas · Pasien · Notifikasi · Lainnya**

### 3.5 Admin

```
/admin                          Dashboard Sistem
/admin/users                    Pengguna
  ↳ /admin/users/new            Buat Pengguna
  ↳ /admin/users/:id            Detail Pengguna
/admin/units                    Unit
  ↳ /admin/units/:id            Detail Unit
    ↳ /admin/units/:id/rooms    Kamar
/admin/shifts                   Definisi Shift
/admin/task-types               Jenis Tindakan  (di sinilah toleransi & lead time diatur)
/admin/roles                    Hak Akses
/admin/audit-logs               Audit Log
/admin/settings                 Konfigurasi Sistem & Notifikasi
/profile                        Profil
```

### 3.6 Pasien

Antarmuka terpisah total. Font lebih besar, kedalaman navigasi maksimal 1, tanpa sidebar.

```
/me                             ◆ Beranda
/me/schedule                    Jadwal Hari Ini
/me/call                        ◆ Panggil Perawat
/me/profile                     Profil Saya
```

Menu bawah pasien: **Beranda · Jadwal · Panggil · Profil** (4 item, ikon + label teks besar).

### 3.7 Global

`/search` bukan halaman, melainkan overlay (Cmd/Ctrl+K di desktop, ikon di header mobile). Cakupan pencarian dibatasi otomatis oleh role (§28 Privasi).

---

## 4. User flow

Setiap flow ditulis dengan jalur normal **dan** jalur pengecualian. PRD §31 hanya memuat jalur normal — bagian ini melengkapinya.

### F-01 · Masuk dan resolusi role

```
Buka aplikasi
 └─ Ada sesi aktif?
     ├─ Ya  → validasi token → redirect sesuai role
     │        └─ token kedaluwarsa → refresh diam-diam
     │            └─ gagal → /login (+ toast "Sesi berakhir, masuk lagi")
     └─ Tidak → /login
                 └─ Kredensial salah → pesan error, hitung percobaan
                     └─ 5× gagal → kunci 15 menit (§28 rate limiting)
                 └─ Akun nonaktif → "Akun tidak aktif. Hubungi admin."
                 └─ Berhasil, tapi perawat belum punya penugasan hari ini
                     → tetap masuk, dashboard tampil empty state
                       "Belum ada pasien yang ditugaskan untuk shift ini"
```

### F-02 · Perawat menyelesaikan tugas (flow inti)

```
/tasks
 └─ Pilih tugas → /tasks/:id
     └─ Tekan [Mulai Tindakan]
         ├─ Tugas sudah dimulai perawat lain (race condition)
         │   → tolak, tampilkan "Tindakan ini sedang dikerjakan oleh Perawat Dedi"
         │   → tawarkan [Lihat Detail]
         ├─ Tugas sudah dibatalkan sejak halaman dibuka
         │   → tolak, refresh halaman
         ├─ Offline
         │   → tetap catat lokal, tandai [Dicatat offline], masuk antrean sinkron
         └─ Berhasil
             → lifecycle: scheduled → in_progress
             → simpan started_at, started_by, device_id
             → tulis task_log
             → dashboard pasien berubah jadi "Sedang dilakukan"

     └─ Tekan [Selesaikan Tindakan] → /tasks/:id/complete
         └─ Isi form:
             · Hasil tindakan            (wajib)
             · Kondisi pasien setelahnya (wajib, pilihan tetap + catatan bebas)
             · Catatan                   (wajib jika timing_state = overdue)
             · Alasan keterlambatan      (wajib jika overdue, dari daftar §15.3)
             · Tindak lanjut             (opsional)
             · Lampiran                  (opsional, Could Have)
             · Checkbox konfirmasi       (wajib — §32 "tidak dapat selesai tanpa konfirmasi")
         ├─ Field wajib kosong → error inline, fokus ke field pertama yang gagal
         ├─ Offline → simpan lokal, tandai antre, tampilkan indikator sinkron
         └─ Simpan
             → hitung completion_outcome dari completed_at vs (scheduled_at + tolerance)
             → lifecycle: in_progress → completed
             → toast sukses
             → kembali ke /tasks, kartu tugas berikutnya naik ke atas
             → beban kerja kepala perawat diperbarui
             → riwayat pasien diperbarui
```

**Pengecualian yang wajib ditangani:**

| Skenario | Perilaku |
|---|---|
| Pasien menolak tindakan | Selesaikan dengan hasil "Ditolak pasien" + alasan wajib. Bukan pembatalan. Tetap masuk riwayat. |
| Pasien tidak ada di kamar | Tunda otomatis 15 menit + notifikasi ke kepala perawat |
| Alat/obat tidak tersedia | Tunda dengan alasan; jika toleransi terlampaui → eskalasi otomatis |
| Perawat memulai lalu menutup aplikasi | Tugas tetap `in_progress`. Jika >2× estimasi durasi tanpa penyelesaian → alert ke kepala perawat (mencegah tugas menggantung) |
| Sinkronisasi offline gagal berulang | Simpan di antrean, tampilkan banner persisten, jangan pernah buang data lokal |

### F-03 · Menunda tugas

```
/tasks/:id → [Tunda]
 └─ Pilih waktu baru (preset 15/30/60 menit atau custom)
 └─ Alasan (wajib, dari daftar)
     ├─ postpone_count sudah = 1
     │   → butuh persetujuan kepala perawat
     │   → status permintaan: menunggu → disetujui / ditolak
     │   → sementara menunggu, tugas TETAP di jadwal lama dan tetap bisa jadi overdue
     └─ postpone_count = 0
         → langsung berlaku
         → scheduled_at diperbarui, lifecycle tetap scheduled
         → postpone_count++, badge "Ditunda 1×"
         → task_log dicatat
         → notifikasi ke kepala perawat
         → jadwal pasien diperbarui
```

Batas: waktu baru tidak boleh melewati akhir shift. Jika perlu melewati shift → gunakan Alihkan, bukan Tunda.

### F-04 · Mengalihkan tugas

Bisa dimulai oleh perawat (minta dialihkan) atau kepala perawat (langsung alihkan).

```
[Alihkan] → pilih perawat tujuan
 └─ Sistem tampilkan beban kerja perawat tujuan sebelum konfirmasi
 └─ Alasan (wajib — §17 aturan 5)
     ├─ Diminta perawat  → butuh persetujuan kepala perawat
     └─ Oleh kepala      → langsung berlaku
         → assigned_nurse_id berubah, lifecycle tetap scheduled
         → badge "Dialihkan"
         → notifikasi ke perawat lama dan perawat baru
         → jika perawat tujuan sudah beban "Tinggi" → tampilkan peringatan, tetap boleh lanjut
```

### F-05 · Membatalkan tugas

```
[Batalkan]  ← hanya kepala perawat / admin
 └─ Alasan wajib
 └─ Konfirmasi dua langkah ("Batalkan tindakan ini?" + tombol destruktif)
     └─ lifecycle → cancelled (final, tidak bisa dibalik)
        → notifikasi ke perawat penanggung jawab
        → hilang dari daftar aktif, tetap ada di riwayat
        → jika tugas berasal dari pola berulang: tanya "batalkan hari ini saja atau
          hentikan pola?" — dua aksi berbeda
```

### F-06 · Kepala perawat membuat & menugaskan

```
/assignments/new
 └─ Pilih shift & tanggal
 └─ Pilih perawat
 └─ Pilih pasien (multi-select)
 └─ Tentukan peran: utama / pendamping
 └─ Sistem hitung ulang beban kerja secara langsung
     ├─ Beban > ambang batas → peringatan, bukan blokir
     ├─ Pasien sudah punya perawat utama di shift yang sama → konflik, harus dipilih
     └─ Perawat tidak terjadwal di shift itu → blokir
 └─ Simpan
     → notifikasi ke perawat
     → audit log
     → tugas pasien yang belum punya penanggung jawab otomatis terhubung
```

### F-07 · Pembangkitan tugas berulang (flow sistem)

```
Scheduler harian (03.00 waktu unit)
 └─ Ambil semua pola aktif yang jatuh pada H+1
     └─ Untuk setiap pola:
         ├─ Sudah ada tugas untuk (pola, tanggal)? → lewati (idempoten)
         ├─ Pasien sudah tidak aktif / keluar?     → lewati, tandai pola perlu review
         ├─ Belum ada penugasan perawat?           → buat tugas dengan nurse_id NULL,
         │                                             masuk daftar "Belum ada petugas"
         └─ Buat tugas: lifecycle=scheduled, source=recurring
 └─ Ringkasan hasil ditulis ke log sistem
```

Aturan penting: mengubah pola **tidak** mengubah tugas yang sudah dibangkitkan. Perubahan hanya berlaku untuk tugas yang dibuat setelahnya. Ini mencegah riwayat berubah retroaktif.

### F-08 · Pasien memanggil perawat

```
/me/call → tombol besar [Panggil Perawat]
 └─ Konfirmasi ("Panggil perawat sekarang?")
     ├─ Sudah ada panggilan aktif → tombol dinonaktifkan + "Perawat sudah dipanggil"
     └─ Kirim
         → status: requested
         → notifikasi ke perawat penanggung jawab shift berjalan
         → pasien lihat status langsung
         ├─ Belum diterima dalam 5 menit  → eskalasi ke kepala perawat  [P]
         ├─ Belum diterima dalam 10 menit → notifikasi ke seluruh perawat unit  [P]
         └─ Perawat tekan [Terima]
             → status: accepted, pasien lihat "Perawat sedang menuju kamar"
             ├─ Belum selesai dalam 15 menit → alert kepala perawat  [P]
             └─ Perawat tekan [Selesai]
                 → status: completed
                 → pasien boleh memanggil lagi
```

Jika tidak ada perawat aktif di unit: panggilan langsung diarahkan ke kepala perawat. Jangan pernah biarkan panggilan tidak punya penerima.

### F-09 · Serah terima shift

```
Perawat shift lama → /handover
 └─ Sistem susun ringkasan otomatis dari data shift:
     pasien dipantau · tugas selesai · belum selesai · terlambat · ditunda ·
     panggilan pasien · tugas prioritas shift berikutnya
 └─ Perawat tambahkan catatan naratif
 └─ [Kirim ke Shift Berikutnya]
     ├─ Masih ada tugas in_progress → blokir, minta diselesaikan atau ditunda dulu
     ├─ Ada tugas terlambat belum ditangani → izinkan kirim, tapi wajib dijelaskan
     └─ Status: menunggu konfirmasi
         └─ Perawat shift baru buka & baca
             ├─ [Konfirmasi Terima]  → status diterima, serah terima terkunci
             ├─ [Minta Revisi]       → status perlu revisi + alasan, kembali ke pengirim
             └─ Tidak dikonfirmasi dalam 60 menit → alert kepala perawat  [P]

Jalur pengecualian:
  · Perawat shift baru belum login saat shift dimulai
      → alert ke kepala perawat (§11.4), serah terima tetap tersimpan sebagai draft
  · Perawat shift lama pulang tanpa membuat serah terima
      → sistem buat draft otomatis, tandai "dibuat sistem", eskalasi ke kepala perawat
```

### F-10 · Koreksi riwayat

```
Perawat/kepala perawat buka tugas selesai → [Ajukan Koreksi]
 └─ Pilih field yang dikoreksi + nilai baru + alasan (wajib)
 └─ Status: menunggu persetujuan
     → /corrections di sisi kepala perawat
     ├─ [Tolak] → alasan wajib, pengaju dinotifikasi
     └─ [Setujui]
         → versi lama diarsipkan (tidak dihapus)
         → versi baru jadi aktif
         → riwayat menampilkan penanda "Dikoreksi" + tautan ke versi sebelumnya
         → audit log mencatat pengaju, penyetuju, sebelum, sesudah
```

Yang **tidak** boleh dikoreksi: `started_at`, `completed_at`, dan identitas perawat pelaksana. Kalau ketiganya bisa diubah, seluruh nilai audit trail hilang. Kesalahan pada ketiganya ditangani dengan pembatalan + pembuatan catatan baru yang mereferensikan yang lama. **[P]**

---

## 5. Struktur dashboard

Ditulis sebagai zona berurutan. Urutan = urutan prioritas informasi. Di mobile, zona ditumpuk dengan urutan yang sama persis.

### 5.1 Perawat — `/tasks`

| # | Zona | Isi | Sumber data | Pembaruan |
|---|---|---|---|---|
| 1 | Header konteks | Sapaan + nama · tanggal · jam berjalan · unit · shift aktif · indikator koneksi · lonceng notifikasi | sesi + `/dashboard/nurse` | jam tiap detik (client), sisanya tiap 30 dtk |
| 2 | Bilah perhatian | Muncul **hanya jika ada** tugas terlambat / panggilan pasien aktif / serah terima menunggu. Merah, di atas segalanya | `/dashboard/nurse` | 30 dtk |
| 3 | Statistik ringkas | 6 kartu: Pasien · Total Tugas · Selesai · Akan Datang · Perlu Perhatian · Terlambat. Semua bisa diklik → daftar terfilter | `/dashboard/nurse` | 30 dtk |
| 4 | **Tugas berikutnya** | Maks 5 kartu, urut: `overdue` → `due` → `upcoming` → prioritas → waktu. Tiap kartu: waktu, nama+kamar pasien, jenis tindakan, prioritas, status, sisa waktu, tombol utama | `/tasks?scope=next` | 30 dtk |
| 5 | Timeline shift | Rel waktu vertikal dengan penanda "sekarang" yang bergerak; tugas terpasang di rel. Bisa difilter per pasien / jenis | `/tasks?shift=current` | 60 dtk |
| 6 | Ringkasan pasien | Satu kartu per pasien: nama, kamar, usia, jumlah tugas, tugas berikutnya, status operasional, penanda catatan khusus | `/nurses/me/patients` | 60 dtk |
| 7 | Aksi cepat | Tambah Tugas · Cari Pasien · Mulai Serah Terima · Laporkan Kendala. Disaring per hak akses | statis | — |

Aturan zona 4: ini adalah alasan halaman ini ada. Harus terlihat tanpa scroll di layar 360×640. Zona 3 karena itu dibuat ringkas — satu baris scroll horizontal di mobile, bukan grid 2×3.

Empty state zona 4: *"Tidak ada tugas dalam waktu dekat. Tugas berikutnya pukul 14.00."* Kalau memang tidak ada sama sekali: *"Belum ada tugas untuk shift ini. Semua jadwal yang ditugaskan kepada Anda akan muncul di sini."* + [Lihat Kalender].

### 5.2 Kepala Perawat — `/operations`

| # | Zona | Isi | Pembaruan |
|---|---|---|---|
| 1 | Header konteks | Sapaan + unit + shift + jam berjalan | 30 dtk |
| 2 | Alert operasional | Daftar alert aktif (§11.4), tiap alert punya tombol aksi langsung: Alihkan / Hubungi / Tinjau | 15 dtk |
| 3 | Statistik unit | Perawat Bertugas · Pasien Aktif · Total Tugas · Tingkat Penyelesaian · Terlambat · Tanpa Petugas · Eskalasi · Beban Tertinggi | 30 dtk |
| 4 | Papan perawat | Tabel (desktop) / kartu (mobile): perawat, jumlah pasien, tugas, selesai, terlambat, indikator beban. Bisa diurutkan | 30 dtk |
| 5 | Pasien perlu perhatian | Hanya pasien dengan tugas terlambat / prioritas tinggi / tanpa perawat / panggilan aktif. Bukan seluruh pasien | 30 dtk |
| 6 | Antrean tindakan | Tugas tanpa petugas + koreksi menunggu persetujuan + serah terima belum dikonfirmasi. Semuanya butuh keputusan kepala perawat | 30 dtk |
| 7 | Grafik | Penyelesaian per jam · % tepat waktu · beban per perawat. Maksimal 3 grafik, ditempatkan paling bawah (§11.5) | 5 menit |

Prinsip zona 2 dan 6: dashboard kepala perawat adalah **daftar keputusan yang menunggu**, bukan galeri angka. Setiap baris harus bisa ditindaklanjuti tanpa berpindah halaman.

Perhitungan beban kerja **[P]** — PRD §11.2 menyebut faktornya tapi tidak rumusnya:

```
skor = (jumlah_pasien × 2)
     + (jumlah_tugas × 1)
     + (tugas_prioritas_tinggi × 2)
     + (tugas_mendesak × 3)
     + (total_estimasi_menit ÷ 30)
     + (jumlah_tugas_bertabrakan_dalam_15_menit × 3)

Ringan ≤ 25   ·   Normal 26–45   ·   Tinggi 46–65   ·   Berlebih > 65
```

Ambang batas ini murni usulan dan **wajib dikalibrasi ulang** setelah satu minggu data nyata. Jangan dianggap final.

### 5.3 Pasien — `/me`

Satu kolom, tanpa sidebar, ukuran font dasar 18px, target sentuh minimal 56px (lebih besar dari standar 44px karena target penggunanya lansia).

| # | Zona | Isi |
|---|---|---|
| 1 | Sapaan | "Selamat pagi, Ibu Siti" + hari, tanggal, nomor kamar |
| 2 | **Tindakan berikutnya** | Kartu besar: jam (angka sangat besar), nama tindakan, nama perawat, status. Menempati minimal 1/3 layar |
| 3 | Panggil perawat | Tombol besar. Berubah jadi kartu status jika ada panggilan aktif |
| 4 | Jadwal hari ini | Daftar sederhana, jam + nama tindakan, yang sudah selesai diberi tanda centang |

Tidak ada statistik, tidak ada grafik, tidak ada tabel. Pasien tidak bisa mengubah apa pun kecuali menekan tombol panggil.

Bahasa: hindari istilah teknis. "Pemberian obat pagi", bukan "Administrasi medikasi". Status ditulis sebagai kalimat: "Perawat Rina sedang menuju kamar Anda", bukan label "accepted".

### 5.4 Admin — `/admin`

Dashboard paling sederhana. Bukan pusat operasional, melainkan pusat konfigurasi dan kesehatan sistem.

| # | Zona | Isi |
|---|---|---|
| 1 | Kesehatan sistem | Pengguna aktif · sesi berjalan · kegagalan sinkronisasi · error terakhir |
| 2 | Ringkasan konfigurasi | Jumlah unit, kamar, jenis tindakan, pola berulang aktif |
| 3 | Aktivitas terbaru | 20 entri audit log terakhir + tautan ke log lengkap |
| 4 | Pintasan | Buat Pengguna · Kelola Jenis Tindakan · Audit Log |

---

## 6. Open questions

Diurutkan berdasarkan apa yang menghambat.

### Menghambat coding

| # | Pertanyaan | Kenapa penting |
|---|---|---|
| Q-1 | V1 = prototype UI klikabel, atau MVP dengan backend nyata? | Menentukan apakah prompt coding memuat FastAPI + PostgreSQL atau hanya Next.js + mock data |
| Q-2 | Stack dikonfirmasi FastAPI + PostgreSQL + Next.js? | Semua kode turunan bergantung pada ini |
| Q-3 | Model status di Bagian 2 disetujui menggantikan §14.4? | Mengubah skema `care_tasks` dan seluruh logika UI |
| Q-4 | Real-time V1: polling 30 detik cukup, atau perlu WebSocket/SSE? | Polling jauh lebih sederhana dan cukup untuk skala 1 unit. WebSocket menambah kompleksitas infrastruktur |
| Q-5 | Dashboard pasien masuk V1 atau ditunda? | §35 menempatkannya di Should Have, tapi §12 dan §36 memperlakukannya seperti fitur inti. Ini menambah satu role penuh + PWA terpisah |

### Menghambat rilis, bukan coding

| # | Pertanyaan |
|---|---|
| Q-6 | Berapa toleransi keterlambatan sebenarnya per jenis tindakan, menurut perawat asli? |
| Q-7 | Apakah "Terbatas" di matriks §8 sesuai dengan definisi usulan di G-11? |
| Q-8 | Siapa boleh menunda dan membatalkan tugas pemberian obat? |
| Q-9 | Berapa SLA nurse call yang realistis di panti lansia? |
| Q-10 | Bagaimana penanganan tugas yang diselesaikan offline — apakah kebijakan `needs_review` di G-12 dapat diterima? |
| Q-11 | Apakah nama produk final sudah ditentukan? (nama muncul di 40+ titik: paket, domain, seed data, judul PWA) |

### Belum ada bukti sama sekali

| # | Pertanyaan |
|---|---|
| Q-12 | Apakah ada panti/klinik nyata yang bersedia jadi design partner? Tanpa ini, seluruh business rule tetap di Level 3 selamanya |
| Q-13 | Apa sistem yang mereka pakai sekarang — kertas, papan tulis, WhatsApp, atau spreadsheet? Ini menentukan strategi migrasi dan pelatihan, dan §3 PRD baru menebaknya |
| Q-14 | Siapa yang membeli — pemilik panti, kepala perawat, atau grup klinik? Model bisnis belum ada di PRD sama sekali |

---

## 7. Yang harus diperbarui di PRD

Jika koreksi di dokumen ini diterima, bagian PRD berikut harus direvisi agar tidak ada dua sumber kebenaran:

- §8 — definisikan nilai "Terbatas"
- §14.4 — ganti dengan model status kanonik (Bagian 2)
- §14.5 — buat tabel toleransi tunggal, hapus contoh yang bertabrakan
- §19.1 — pisahkan `lead_minutes` dari `reminder_minutes`
- §29 — tambahkan `task_types`, `task_recurrences`, `task_corrections`; tambahkan `unit_id`/`shift_id` di `care_tasks`; jadikan `patients.user_id` nullable
- §30 — tambahkan endpoint untuk recurring, corrections, nurse calls
- §31 — tambahkan jalur pengecualian dari Bagian 4
