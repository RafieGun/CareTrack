<<<<<<< HEAD
# PRODUCT REQUIREMENTS DOCUMENT

## CareTrack

### Aplikasi Penjadwalan dan Pemantauan Tugas Perawatan Pasien

**Versi:** 1.0
**Status:** Draft Produk
**Platform:** Responsive Web Application dan Progressive Web App
**Target perangkat:** Desktop, tablet, dan smartphone
**Target implementasi:** Panti lansia, layanan home care, klinik, dan unit perawatan pasien
**Bahasa utama:** Bahasa Indonesia

---

# 1. Ringkasan Produk

CareTrack adalah aplikasi manajemen tugas perawatan yang membantu perawat, caregiver, dan kepala perawat dalam menjadwalkan, menjalankan, memantau, serta mendokumentasikan tindakan perawatan terhadap banyak pasien.

Dalam satu shift, seorang perawat dapat bertanggung jawab terhadap beberapa pasien dengan kebutuhan berbeda. Setiap pasien dapat memiliki jadwal pemberian obat, pemeriksaan tanda vital, penggantian cairan infus, bantuan makan, perawatan kebersihan, observasi kondisi, dan tindakan lainnya.

CareTrack menyediakan dashboard operasional yang menampilkan tugas berdasarkan waktu, tingkat prioritas, pasien, ruangan, dan status penyelesaian. Sistem secara otomatis menandai tugas yang sudah memasuki waktu pelaksanaan, mendeteksi tugas terlambat, mengirimkan pengingat, dan menyimpan riwayat tindakan.

CareTrack tidak digunakan untuk memberikan diagnosis, menentukan dosis obat, atau menggantikan keputusan tenaga medis. Aplikasi berfungsi sebagai sistem koordinasi, pengingat, pemantauan, dan dokumentasi tugas yang sebelumnya sudah ditentukan oleh tenaga berwenang.

---

# 2. Visi Produk

Menciptakan sistem perawatan pasien yang lebih terorganisasi, tepat waktu, transparan, dan mudah dipantau sehingga perawat dapat memberikan pelayanan secara konsisten tanpa kehilangan informasi penting di tengah banyaknya pasien dan tugas dalam satu shift.

---

# 3. Latar Belakang Masalah

Perawat dan caregiver sering menangani beberapa pasien dalam waktu yang bersamaan. Setiap pasien memiliki kebutuhan, waktu tindakan, dan tingkat prioritas yang berbeda.

Dalam proses manual, jadwal perawatan biasanya dicatat pada kertas, papan tulis, pesan grup, spreadsheet, atau hanya diingat oleh petugas. Cara tersebut dapat menimbulkan beberapa masalah:

1. Perawat kesulitan mengetahui tugas yang harus didahulukan.
2. Jadwal tindakan dapat terlupakan ketika situasi sedang sibuk.
3. Informasi pasien tersebar pada beberapa media.
4. Kepala perawat sulit melihat progres tugas secara real-time.
5. Pergantian shift berpotensi menyebabkan informasi terlewat.
6. Riwayat tindakan tidak terdokumentasi secara konsisten.
7. Tidak terdapat peringatan otomatis ketika tugas terlambat.
8. Pembagian pasien kepada perawat tidak selalu terlihat dengan jelas.
9. Perawat harus membuka banyak catatan untuk melihat kebutuhan satu pasien.
10. Pasien tidak mengetahui jadwal tindakan berikutnya.

CareTrack dirancang untuk menyatukan seluruh kebutuhan tersebut dalam satu aplikasi yang terstruktur dan mudah digunakan.

---

# 4. Pernyataan Masalah

Perawat yang menangani beberapa pasien membutuhkan sistem yang dapat membantu mereka mengetahui tugas berikutnya, melihat tugas prioritas, menerima pengingat, mencatat penyelesaian tindakan, serta memantau seluruh pasien secara cepat tanpa harus bergantung pada catatan manual yang tersebar.

Kepala perawat juga membutuhkan tampilan terpusat untuk mengetahui pembagian pasien, progres tugas, tindakan terlambat, dan kondisi operasional setiap shift.

---

# 5. Tujuan Produk

## 5.1 Tujuan Utama

1. Membantu perawat menjalankan tugas perawatan tepat waktu.
2. Memudahkan pemantauan beberapa pasien dalam satu dashboard.
3. Mengurangi risiko tugas terlupakan atau terlambat.
4. Menyediakan dokumentasi tindakan yang terstruktur.
5. Memudahkan koordinasi dan pergantian shift.
6. Memberikan visibilitas operasional kepada kepala perawat.
7. Menyediakan pengalaman penggunaan yang sederhana dan responsif.

## 5.2 Tujuan Pengalaman Pengguna

1. Perawat dapat mengetahui tugas berikutnya dalam waktu kurang dari lima detik.
2. Perawat dapat menyelesaikan dan mencatat satu tindakan dalam maksimal tiga langkah utama.
3. Status tugas dapat dipahami tanpa membuka halaman detail.
4. Informasi pasien dapat ditemukan melalui pencarian atau filter.
5. Pengguna dapat menggunakan aplikasi melalui HP ketika sedang bergerak.
6. Kepala perawat dapat memahami kondisi satu shift melalui satu dashboard.
7. Pasien lansia dapat memahami jadwal berikutnya tanpa navigasi yang rumit.

---

# 6. Sasaran Pengguna

## 6.1 Perawat atau Caregiver

Pengguna utama yang bertanggung jawab menjalankan tindakan perawatan.

Kebutuhan utama:

* Mengetahui pasien yang menjadi tanggung jawabnya.
* Melihat tugas hari ini.
* Mengetahui tugas terdekat dan terlambat.
* Memulai dan menyelesaikan tindakan.
* Menambahkan catatan tindakan.
* Melihat riwayat pasien.
* Melakukan serah terima shift.
* Mendapatkan notifikasi.

## 6.2 Kepala Perawat atau Supervisor

Pengguna yang bertanggung jawab terhadap pengawasan operasional.

Kebutuhan utama:

* Melihat seluruh perawat dan pasien.
* Membagi pasien kepada perawat.
* Membuat serta mengubah jadwal tugas.
* Melihat tugas yang selesai dan terlambat.
* Memantau beban kerja perawat.
* Melakukan eskalasi ketika tugas penting terlambat.
* Melihat laporan performa per shift.

## 6.3 Admin

Pengguna yang mengelola konfigurasi sistem.

Kebutuhan utama:

* Membuat akun pengguna.
* Mengatur role dan hak akses.
* Mengelola unit, ruangan, dan jenis tindakan.
* Menonaktifkan akun.
* Mengakses audit log.
* Mengelola pengaturan notifikasi.

## 6.4 Pasien

Pengguna dengan akses sederhana untuk melihat informasi perawatan yang relevan.

Kebutuhan utama:

* Melihat jadwal hari ini.
* Mengetahui tindakan berikutnya.
* Mengetahui nama perawat yang bertugas.
* Melihat status kedatangan perawat.
* Memanggil perawat.
* Melihat informasi dasar yang mudah dipahami.

---

# 7. Ruang Lingkup Produk

## 7.1 Termasuk dalam Scope

* Autentikasi pengguna.
* Manajemen akun perawat dan pasien.
* Dashboard perawat.
* Dashboard kepala perawat.
* Dashboard pasien.
* Manajemen data pasien.
* Penugasan pasien kepada perawat.
* Manajemen jadwal tindakan.
* Status tindakan secara real-time.
* Notifikasi tugas.
* Riwayat tindakan.
* Catatan penyelesaian.
* Pergantian shift.
* Pencarian dan filter.
* Laporan operasional.
* Audit log.
* Responsive design.
* Mode aksesibilitas.
* Progressive Web App.

## 7.2 Tidak Termasuk dalam Scope Awal

* Diagnosis pasien.
* Rekomendasi medis otomatis.
* Penentuan dosis obat.
* Sistem farmasi.
* Stok obat dan alat medis.
* Pembayaran dan billing.
* Klaim asuransi.
* Integrasi laboratorium.
* Telemedicine.
* Rekam medis elektronik penuh.
* Integrasi alat kesehatan.
* Emergency dispatch.
* Chat dokter dan pasien.
* Video consultation.

---

# 8. Struktur Role dan Hak Akses

| Fitur                          |  Perawat | Kepala Perawat |          Admin | Pasien |
| ------------------------------ | -------: | -------------: | -------------: | -----: |
| Melihat dashboard pribadi      |       Ya |             Ya |             Ya |     Ya |
| Melihat pasien yang ditugaskan |       Ya |             Ya |             Ya |  Tidak |
| Melihat seluruh pasien         |    Tidak |             Ya |             Ya |  Tidak |
| Membuat pasien                 |    Tidak |             Ya |             Ya |  Tidak |
| Mengubah data pasien           | Terbatas |             Ya |             Ya |  Tidak |
| Membuat tugas                  | Terbatas |             Ya |             Ya |  Tidak |
| Menjalankan tindakan           |       Ya |             Ya |          Tidak |  Tidak |
| Menyelesaikan tindakan         |       Ya |             Ya |          Tidak |  Tidak |
| Mengubah tugas selesai         |    Tidak |       Terbatas |             Ya |  Tidak |
| Menghapus riwayat              |    Tidak |          Tidak |          Tidak |  Tidak |
| Melihat laporan                |  Pribadi |   Seluruh unit | Seluruh sistem |  Tidak |
| Membuat akun                   |    Tidak |       Terbatas |             Ya |  Tidak |
| Mengatur role                  |    Tidak |          Tidak |             Ya |  Tidak |
| Memanggil perawat              |    Tidak |          Tidak |          Tidak |     Ya |

Riwayat tindakan tidak dapat dihapus melalui antarmuka normal. Koreksi dilakukan melalui mekanisme perubahan terkontrol dan dicatat dalam audit log.

---

# 9. Arsitektur Informasi

## 9.1 Navigasi Perawat

1. Dashboard
2. Tugas
3. Pasien
4. Kalender
5. Riwayat
6. Serah Terima
7. Notifikasi
8. Profil

## 9.2 Navigasi Kepala Perawat

1. Dashboard
2. Operasional
3. Tugas
4. Pasien
5. Perawat
6. Penugasan
7. Kalender
8. Laporan
9. Serah Terima
10. Pengaturan

## 9.3 Navigasi Admin

1. Dashboard
2. Pengguna
3. Unit dan Ruangan
4. Jenis Tindakan
5. Hak Akses
6. Audit Log
7. Konfigurasi
8. Profil

## 9.4 Navigasi Pasien

1. Beranda
2. Jadwal
3. Panggil Perawat
4. Profil

---

# 10. Dashboard Perawat

## 10.1 Header Dashboard

Dashboard menampilkan sapaan dinamis berdasarkan waktu.

Contoh:

**Good Morning, Perawat Rina**
Berikut ringkasan tugas dan kondisi pasien untuk shift pagi.

Informasi pendukung:

* Hari dan tanggal.
* Waktu real-time.
* Nama unit.
* Shift aktif.
* Foto profil.
* Tombol notifikasi.
* Status koneksi.
* Tombol ganti shift jika diizinkan.

Sapaan:

* 05.00–10.59: Good Morning
* 11.00–14.59: Good Afternoon
* 15.00–18.29: Good Evening
* 18.30–04.59: Good Night

Dalam versi Bahasa Indonesia, sapaan dapat ditampilkan sebagai:

* Selamat pagi.
* Selamat siang.
* Selamat sore.
* Selamat malam.

## 10.2 Ringkasan Utama

Dashboard menampilkan kartu statistik:

* Pasien Dipantau.
* Total Tugas Hari Ini.
* Tugas Selesai.
* Perlu Perhatian.
* Tugas Terlambat.
* Tugas Prioritas Tinggi.

Contoh:

| Statistik       | Nilai |
| --------------- | ----: |
| Pasien dipantau |     5 |
| Total tugas     |    18 |
| Selesai         |     9 |
| Akan datang     |     5 |
| Perlu perhatian |     3 |
| Terlambat       |     1 |

Setiap kartu dapat diklik untuk membuka daftar yang sudah difilter.

## 10.3 Tugas Berikutnya

Bagian paling utama pada dashboard.

Menampilkan maksimal lima tugas terdekat berdasarkan waktu dan prioritas.

Informasi pada kartu tugas:

* Waktu.
* Nama pasien.
* Foto atau inisial pasien.
* Nomor kamar.
* Jenis tindakan.
* Prioritas.
* Status.
* Waktu tersisa.
* Tombol tindakan utama.

Contoh:

**08.00 — Ibu Siti**
Kamar 201
Pemberian obat tekanan darah
Waktunya sekarang

Tombol:

* Mulai Tindakan.
* Lihat Detail.

## 10.4 Tugas Perlu Perhatian

Bagian khusus yang menampilkan:

* Tugas terlambat.
* Tugas prioritas tinggi.
* Tugas yang ditunda.
* Tugas tanpa petugas.
* Tugas dengan catatan penting.
* Tugas yang belum dikonfirmasi.

Copy profesional:

**Ada 3 tugas yang memerlukan perhatian**

Bukan:

**3 tugas bermasalah**

## 10.5 Ringkasan Pasien

Menampilkan kartu setiap pasien yang ditugaskan.

Informasi:

* Nama pasien.
* Kamar.
* Usia.
* Jumlah tugas hari ini.
* Tugas berikutnya.
* Status perhatian.
* Nama perawat utama.
* Indikator catatan khusus.

Status pasien:

* Stabil.
* Perlu Pemantauan.
* Tindakan Terlambat.
* Tidak Ada Jadwal Berikutnya.

Status bukan diagnosis medis dan hanya merepresentasikan kondisi operasional tugas.

## 10.6 Timeline Shift

Menampilkan distribusi tugas dari awal hingga akhir shift.

Contoh:

* 07.00 — Pemeriksaan tanda vital.
* 08.00 — Pemberian obat.
* 09.00 — Bantuan makan.
* 10.00 — Penggantian infus.
* 11.00 — Observasi.
* 12.00 — Serah terima.

Timeline dapat difilter berdasarkan pasien atau jenis tindakan.

## 10.7 Quick Actions

* Tambah Tugas.
* Scan Pasien.
* Cari Pasien.
* Mulai Serah Terima.
* Laporkan Kendala.
* Panggil Bantuan.

Quick action hanya menampilkan fungsi yang diizinkan berdasarkan role.

---

# 11. Dashboard Kepala Perawat

## 11.1 Ringkasan Operasional

Header:

**Good Morning, Kepala Perawat Maya**
Berikut kondisi operasional Unit Lansia A pada shift pagi.

Kartu statistik:

* Perawat Bertugas.
* Pasien Aktif.
* Total Tugas.
* Tingkat Penyelesaian.
* Tugas Terlambat.
* Tugas Belum Memiliki Perawat.
* Insiden atau Eskalasi.
* Beban Kerja Tertinggi.

## 11.2 Monitoring Perawat

Tabel atau kartu perawat:

| Perawat | Pasien | Tugas | Selesai | Terlambat | Beban Kerja |
| ------- | -----: | ----: | ------: | --------: | ----------- |
| Rina    |      5 |    18 |       9 |         1 | Tinggi      |
| Dedi    |      4 |    14 |      10 |         0 | Normal      |
| Maya    |      3 |     9 |       8 |         0 | Ringan      |

Beban kerja dihitung berdasarkan:

* Jumlah pasien.
* Jumlah tugas.
* Tingkat prioritas.
* Durasi estimasi.
* Jumlah tugas dalam waktu yang berdekatan.

## 11.3 Monitoring Pasien

Menampilkan pasien dengan:

* Tugas terlambat.
* Tindakan prioritas tinggi.
* Perawat belum ditugaskan.
* Catatan penting.
* Aktivitas terbaru.
* Tindakan berikutnya.

## 11.4 Operational Alert

Jenis alert:

* Tugas prioritas tinggi terlambat.
* Pasien memanggil perawat.
* Tugas belum memiliki penanggung jawab.
* Perawat memiliki beban kerja berlebih.
* Jadwal tugas bertabrakan.
* Serah terima belum selesai.
* Perawat belum login saat shift dimulai.

## 11.5 Grafik Operasional

Grafik yang ditampilkan:

* Penyelesaian tugas per jam.
* Persentase tugas tepat waktu.
* Jumlah tugas per jenis.
* Beban kerja per perawat.
* Tugas terlambat per hari.
* Distribusi tugas per pasien.

Grafik tidak boleh memenuhi seluruh dashboard. Data tindakan tetap menjadi fokus utama.

---

# 12. Dashboard Pasien

Dashboard pasien harus sangat sederhana dan ramah lansia.

## 12.1 Header

**Selamat pagi, Ibu Siti**

Di bawahnya:

Hari ini, Senin 10 Agustus
Kamar 201

## 12.2 Tindakan Berikutnya

Kartu utama dengan ukuran besar.

**Tindakan berikutnya**

08.00
Pemberian obat pagi

Perawat Rina akan membantu Anda.

Status:

* Akan datang.
* Perawat sedang menuju kamar.
* Sedang dilakukan.
* Selesai.

## 12.3 Tombol Panggil Perawat

Tombol besar:

**Panggil Perawat**

Setelah ditekan:

* Sistem meminta konfirmasi.
* Notifikasi masuk ke perawat yang bertugas.
* Pasien melihat status permintaan.
* Permintaan tidak dapat dikirim berkali-kali selama masih aktif.

Status:

* Permintaan dikirim.
* Perawat menerima.
* Perawat menuju kamar.
* Permintaan selesai.

## 12.4 Jadwal Hari Ini

Menampilkan jadwal dalam bentuk timeline sederhana.

* 08.00 Obat pagi.
* 09.30 Pemeriksaan tekanan darah.
* 12.00 Bantuan makan.
* 15.00 Pemeriksaan kondisi.

Pasien tidak dapat mengubah jadwal.

---

# 13. Modul Manajemen Pasien

## 13.1 Daftar Pasien

Kolom:

* Nama pasien.
* Nomor pasien.
* Kamar.
* Usia.
* Perawat penanggung jawab.
* Tugas berikutnya.
* Jumlah tugas hari ini.
* Status operasional.
* Tindakan.

Fitur:

* Pencarian nama.
* Filter kamar.
* Filter perawat.
* Filter status.
* Pengurutan berdasarkan tugas berikutnya.
* Tampilan kartu dan tabel.
* Pagination atau infinite scrolling.

## 13.2 Detail Pasien

Breadcrumb:

**Pasien / Ibu Siti / Ringkasan**

Bagian detail:

1. Ringkasan.
2. Jadwal.
3. Riwayat Tindakan.
4. Catatan.
5. Perawat.
6. Informasi Dasar.

Header detail:

* Nama pasien.
* Foto atau inisial.
* Nomor pasien.
* Kamar.
* Usia.
* Perawat aktif.
* Tugas berikutnya.
* Status perhatian.

## 13.3 Informasi Pasien

Data minimum:

* Nama lengkap.
* Nomor identitas internal.
* Tanggal lahir.
* Jenis kelamin.
* Nomor kamar.
* Unit.
* Kontak darurat.
* Catatan kebutuhan khusus.
* Status aktif.
* Tanggal masuk.
* Foto opsional.

Data sensitif harus dibatasi sesuai role.

---

# 14. Modul Tugas Perawatan

## 14.1 Jenis Tugas

Kategori awal:

1. Pemberian Obat.
2. Pemeriksaan Tanda Vital.
3. Penggantian Cairan Infus.
4. Bantuan Makan.
5. Perawatan Kebersihan.
6. Mobilisasi Pasien.
7. Pemeriksaan Kondisi Umum.
8. Pendampingan Aktivitas.
9. Penggantian Perban.
10. Tindakan Lainnya.

## 14.2 Data Tugas

Setiap tugas memiliki:

* ID tugas.
* Pasien.
* Perawat.
* Kategori.
* Judul tugas.
* Instruksi.
* Tanggal.
* Waktu.
* Estimasi durasi.
* Tingkat prioritas.
* Toleransi keterlambatan.
* Status.
* Dibuat oleh.
* Waktu dibuat.
* Waktu dimulai.
* Waktu selesai.
* Catatan penyelesaian.
* Lampiran opsional.
* Alasan penundaan.
* Alasan pembatalan.

## 14.3 Prioritas Tugas

* Normal.
* Penting.
* Tinggi.
* Mendesak.

Prioritas tidak hanya ditampilkan melalui warna. Setiap prioritas harus memiliki label teks dan ikon.

## 14.4 Status Tugas

### Terjadwal

Tugas sudah dibuat, tetapi waktunya masih jauh.

### Akan Datang

Tugas akan dimulai dalam 30 menit.

### Waktunya

Waktu saat ini sudah mencapai jadwal dan masih berada dalam batas toleransi.

### Sedang Dilakukan

Perawat telah menekan tombol Mulai Tindakan.

### Selesai

Perawat telah menyelesaikan dan menyimpan catatan tindakan.

### Terlambat

Tugas belum dimulai atau diselesaikan setelah melewati batas toleransi.

### Ditunda

Tugas ditunda dengan alasan dan waktu baru.

### Dibatalkan

Tugas dibatalkan oleh pengguna berwenang dengan alasan wajib.

### Dialihkan

Tugas dipindahkan kepada perawat lain.

## 14.5 Aturan Keterlambatan

Default toleransi keterlambatan adalah 30 menit.

Contoh:

* Jadwal: 08.00.
* 07.30–07.59: Akan Datang.
* 08.00–08.29: Waktunya.
* Mulai 08.30: Terlambat.

Toleransi dapat dikonfigurasi berdasarkan jenis tugas.

Contoh:

* Pemberian obat: 15 menit.
* Bantuan makan: 30 menit.
* Pemeriksaan rutin: 30 menit.
* Aktivitas pasien: 60 menit.

Perubahan toleransi hanya dapat dilakukan oleh admin atau kepala perawat.

---

# 15. Alur Penyelesaian Tugas

## 15.1 Memulai Tindakan

Perawat membuka tugas dan menekan:

**Mulai Tindakan**

Sistem menyimpan:

* Perawat yang memulai.
* Waktu mulai.
* Perangkat.
* Status sebelumnya.
* Lokasi opsional jika diizinkan.

Status berubah menjadi:

**Sedang Dilakukan**

## 15.2 Menyelesaikan Tindakan

Perawat menekan:

**Selesaikan Tindakan**

Form penyelesaian:

* Hasil tindakan.
* Catatan.
* Kondisi pasien setelah tindakan.
* Lampiran opsional.
* Tindak lanjut.
* Checkbox konfirmasi.

Setelah disimpan:

* Status menjadi Selesai.
* Waktu selesai dicatat.
* Riwayat diperbarui.
* Dashboard diperbarui.
* Kepala perawat dapat melihat hasilnya.

Pesan sukses:

**Tindakan berhasil diselesaikan. Terima kasih telah memperbarui kondisi pasien. 😊**

Untuk pasien:

**Tindakan telah selesai. Semoga kondisi Anda semakin membaik. 😊**

## 15.3 Penyelesaian Terlambat

Jika tindakan diselesaikan setelah melewati toleransi:

Status riwayat:

**Selesai Terlambat**

Sistem meminta alasan:

* Kondisi pasien lain lebih mendesak.
* Menunggu instruksi.
* Menunggu alat.
* Pasien belum siap.
* Kendala operasional.
* Alasan lainnya.

Alasan wajib diisi.

---

# 16. Modul Kalender dan Jadwal

Tampilan kalender:

* Harian.
* Mingguan.
* Bulanan.
* Timeline per shift.

Filter:

* Pasien.
* Perawat.
* Jenis tindakan.
* Status.
* Prioritas.
* Unit.
* Ruangan.

Fitur:

* Drag and drop untuk kepala perawat pada desktop.
* Reschedule.
* Duplicate task.
* Recurring task.
* Conflict detection.
* Shift filtering.
* Bulk assignment.
* Export jadwal.

Recurring task:

* Setiap hari.
* Hari tertentu.
* Setiap beberapa jam.
* Rentang tanggal.
* Sampai dihentikan.

---

# 17. Modul Penugasan Pasien

Kepala perawat dapat menentukan pasien yang menjadi tanggung jawab setiap perawat.

Data penugasan:

* Perawat.
* Pasien.
* Unit.
* Shift.
* Tanggal mulai.
* Tanggal selesai.
* Peran utama atau pendamping.
* Status penugasan.

Aturan:

1. Satu pasien dapat memiliki perawat utama dan pendamping.
2. Satu perawat dapat menangani beberapa pasien.
3. Sistem memberikan peringatan jika beban kerja terlalu tinggi.
4. Perubahan penugasan dicatat dalam audit log.
5. Pengalihan pasien harus memiliki alasan.
6. Perawat hanya melihat pasien yang ditugaskan, kecuali memiliki izin tambahan.

---

# 18. Modul Serah Terima Shift

## 18.1 Tujuan

Memastikan informasi penting tidak hilang ketika terjadi pergantian shift.

## 18.2 Isi Serah Terima

* Pasien yang dipantau.
* Tugas selesai.
* Tugas belum selesai.
* Tugas terlambat.
* Tugas yang ditunda.
* Catatan khusus.
* Permintaan pasien.
* Tindakan berikutnya.
* Tugas prioritas.
* Kendala operasional.

## 18.3 Alur

1. Perawat shift lama membuka Serah Terima.
2. Sistem mengisi ringkasan otomatis.
3. Perawat menambahkan catatan.
4. Perawat berikutnya membaca ringkasan.
5. Perawat berikutnya memberikan konfirmasi.
6. Kepala perawat dapat melihat status serah terima.

Status:

* Belum Dibuat.
* Draft.
* Menunggu Konfirmasi.
* Diterima.
* Perlu Revisi.

---

# 19. Sistem Notifikasi

## 19.1 Notifikasi Perawat

* Tugas akan dimulai 15 menit lagi.
* Tugas sudah memasuki waktunya.
* Tugas terlambat.
* Pasien memanggil.
* Tugas dialihkan.
* Jadwal berubah.
* Kepala perawat memberikan catatan.
* Serah terima menunggu konfirmasi.

## 19.2 Notifikasi Kepala Perawat

* Tugas penting terlambat.
* Tugas belum memiliki petugas.
* Perawat belum memulai shift.
* Beban kerja tidak seimbang.
* Pasien memanggil terlalu lama.
* Terdapat tugas gagal diselesaikan.
* Serah terima belum selesai.

## 19.3 Kanal Notifikasi

* In-app notification.
* Browser notification.
* Push notification.
* Getaran perangkat.
* Nada notifikasi.
* Email untuk laporan tertentu.

## 19.4 Aturan Notifikasi

Notifikasi tidak boleh membanjiri pengguna.

Sistem harus:

* Mengelompokkan notifikasi serupa.
* Memberi prioritas.
* Menyediakan mode senyap.
* Menghindari notifikasi ganda.
* Menghapus notifikasi yang sudah tidak relevan.
* Melakukan eskalasi jika tugas prioritas tinggi diabaikan.

---

# 20. Pencarian dan Filter

Global search dapat mencari:

* Nama pasien.
* Nomor pasien.
* Kamar.
* Nama perawat.
* Judul tugas.
* Jenis tindakan.

Filter cepat:

* Hari ini.
* Tugas saya.
* Terlambat.
* Prioritas tinggi.
* Belum ditugaskan.
* Selesai.
* Unit saya.
* Shift aktif.

Filter yang dipilih harus terlihat dan mudah dihapus.

---

# 21. Riwayat dan Audit Log

## 21.1 Riwayat Tindakan

Riwayat menampilkan:

* Nama tindakan.
* Pasien.
* Perawat.
* Jadwal.
* Waktu mulai.
* Waktu selesai.
* Status.
* Catatan.
* Alasan keterlambatan.
* Perubahan data.

Riwayat tidak dapat dihapus oleh pasien atau perawat.

## 21.2 Koreksi Riwayat

Jika terdapat kesalahan:

1. Pengguna mengajukan koreksi.
2. Kepala perawat atau admin menyetujui.
3. Data lama tetap tersimpan.
4. Data baru menjadi versi aktif.
5. Perubahan masuk ke audit log.

## 21.3 Audit Log

Mencatat:

* Login dan logout.
* Pembuatan akun.
* Perubahan role.
* Pembuatan pasien.
* Perubahan pasien.
* Pembuatan tugas.
* Perubahan jadwal.
* Pengalihan tugas.
* Penyelesaian tindakan.
* Koreksi riwayat.
* Perubahan konfigurasi.

---

# 22. Laporan dan Analitik

## 22.1 Laporan Perawat

* Jumlah tugas.
* Persentase selesai.
* Persentase tepat waktu.
* Jumlah terlambat.
* Rata-rata waktu penyelesaian.
* Jumlah pasien.
* Distribusi jenis tindakan.

## 22.2 Laporan Unit

* Total tugas per shift.
* Tingkat penyelesaian.
* Tugas terlambat.
* Beban kerja per perawat.
* Pasien dengan tugas terbanyak.
* Waktu sibuk.
* Jenis tugas dominan.
* Jumlah pengalihan tugas.

## 22.3 Filter Laporan

* Tanggal.
* Shift.
* Perawat.
* Pasien.
* Unit.
* Jenis tindakan.
* Status.
* Prioritas.

## 22.4 Ekspor

* PDF.
* CSV.
* Print view.

---

# 23. Desain dan Pengalaman Pengguna

## 23.1 Gaya Visual

Karakter produk:

* Profesional.
* Tenang.
* Bersih.
* Modern.
* Humanis.
* Tidak terasa seperti sistem administrasi lama.
* Tidak terlalu ramai.
* Mudah dipahami saat pengguna sedang sibuk.

## 23.2 Dashboard Style

Dashboard menggunakan konsep:

* Sapaan personal.
* Ringkasan statistik.
* Hierarki informasi yang jelas.
* Card dengan ruang yang cukup.
* Data penting tampil lebih dahulu.
* Quick actions.
* Real-time clock.
* Status operasional.
* Kombinasi table dan card.
* Responsive layout.
* Microinteraction ringan.

## 23.3 Sidebar Desktop

Sidebar harus:

* Memiliki tinggi penuh layar.
* Tetap terlihat saat halaman di-scroll.
* Dapat di-collapse.
* Menampilkan logo.
* Menampilkan menu berdasarkan role.
* Menampilkan unit dan shift aktif.
* Menampilkan profil pengguna di bagian bawah.
* Tidak muncul pada mode mobile.

## 23.4 Navigasi Mobile

Pada smartphone:

* Menggunakan bottom navigation.
* Maksimal lima menu utama.
* Fitur tambahan berada dalam menu Lainnya.
* Tombol tindakan utama mudah dijangkau ibu jari.
* Tidak menggunakan tabel lebar.
* Card dapat ditumpuk secara vertikal.

## 23.5 Breadcrumb

Breadcrumb digunakan pada halaman:

* Detail pasien.
* Detail tugas.
* Detail perawat.
* Laporan.
* Pengaturan.
* Riwayat tindakan.

Contoh:

**Dashboard / Pasien / Ibu Siti / Jadwal**

---

# 24. Sistem Desain

## 24.1 Komponen Utama

* Button.
* Input.
* Select.
* Date picker.
* Time picker.
* Search bar.
* Badge.
* Status pill.
* Patient card.
* Task card.
* Statistic card.
* Table.
* Modal.
* Drawer.
* Toast.
* Alert.
* Timeline.
* Calendar.
* Empty state.
* Skeleton loading.
* Pagination.
* Tabs.
* Breadcrumb.
* Bottom navigation.
* Sidebar.

## 24.2 Status Visual

Status harus memiliki:

* Warna.
* Label.
* Ikon.
* Deskripsi tekstual.

Contoh:

* Akan Datang — ikon jam.
* Waktunya — ikon lonceng.
* Sedang Dilakukan — ikon aktivitas.
* Selesai — ikon centang.
* Terlambat — ikon peringatan.
* Ditunda — ikon jeda.
* Dibatalkan — ikon silang.

## 24.3 Empty State

Contoh:

**Belum ada tugas untuk shift ini**

Semua jadwal yang ditugaskan kepada Anda akan muncul di sini.

Tombol:

**Lihat Kalender**

## 24.4 Error State

Pesan harus menjelaskan:

* Apa yang gagal.
* Kemungkinan penyebab.
* Langkah selanjutnya.

Contoh:

**Tugas belum dapat disimpan**

Periksa kembali data wajib atau koneksi internet, lalu coba lagi.

---

# 25. Aksesibilitas

CareTrack harus mengikuti prinsip WCAG.

Persyaratan:

1. Kontras teks minimal sesuai standar.
2. Ukuran teks dapat diperbesar.
3. Ukuran target ketukan minimal 44 × 44 piksel.
4. Informasi tidak hanya mengandalkan warna.
5. Semua ikon memiliki label atau tooltip.
6. Navigasi keyboard pada desktop.
7. Focus state terlihat jelas.
8. Form memiliki label.
9. Error form dijelaskan melalui teks.
10. Modal dapat ditutup dengan keyboard.
11. Screen reader dapat membaca status tugas.
12. Animasi dapat dikurangi.
13. Bahasa dibuat singkat dan mudah dipahami.
14. Pasien lansia mendapat antarmuka khusus yang lebih sederhana.
15. Tidak menggunakan gesture tersembunyi sebagai satu-satunya cara.

---

# 26. Responsive Behavior

## Desktop

* Sidebar penuh.
* Dashboard multi-kolom.
* Tabel lengkap.
* Grafik.
* Panel detail.
* Kalender mingguan.

## Tablet

* Sidebar dapat di-collapse.
* Dashboard dua kolom.
* Tabel disederhanakan.
* Kalender harian atau mingguan.

## Mobile

* Bottom navigation.
* Dashboard satu kolom.
* Kartu tugas vertikal.
* Tombol sticky untuk tindakan utama.
* Filter dalam bottom sheet.
* Form satu kolom.
* Detail menggunakan accordion bila diperlukan.

---

# 27. Persyaratan Fungsional Utama

## FR-01 Autentikasi

Sistem harus memungkinkan pengguna login berdasarkan akun dan role.

## FR-02 Dashboard Role-Based

Sistem harus menampilkan dashboard berbeda berdasarkan role.

## FR-03 Manajemen Pasien

Kepala perawat dan admin harus dapat membuat dan mengelola pasien.

## FR-04 Penugasan

Kepala perawat harus dapat menghubungkan perawat dengan pasien.

## FR-05 Manajemen Tugas

Pengguna berwenang harus dapat membuat, mengubah, menjadwalkan, dan mengalihkan tugas.

## FR-06 Status Real-Time

Sistem harus memperbarui status berdasarkan waktu dan aktivitas pengguna.

## FR-07 Keterlambatan

Sistem harus menandai tugas terlambat setelah melewati batas toleransi.

## FR-08 Penyelesaian

Perawat harus dapat menyelesaikan tindakan dengan catatan.

## FR-09 Notifikasi

Sistem harus mengirimkan pengingat sesuai jadwal.

## FR-10 Riwayat

Sistem harus menyimpan seluruh tindakan dan perubahan.

## FR-11 Serah Terima

Sistem harus mendukung ringkasan pergantian shift.

## FR-12 Laporan

Kepala perawat harus dapat melihat laporan operasional.

## FR-13 Panggil Perawat

Pasien harus dapat mengirimkan permintaan kepada perawat.

## FR-14 Offline Support

PWA harus tetap menampilkan data terakhir saat koneksi terputus.

## FR-15 Sinkronisasi

Perubahan lokal harus disinkronkan setelah koneksi kembali.

---

# 28. Persyaratan Nonfungsional

## Kinerja

* Dashboard dimuat kurang dari tiga detik pada koneksi normal.
* Interaksi tombol memberi feedback kurang dari 300 milidetik.
* Pencarian menampilkan hasil secara cepat.
* Data besar menggunakan pagination.

## Keandalan

* Data tindakan tidak boleh hilang.
* Penyimpanan harus menggunakan transaksi.
* Sistem menyediakan retry ketika sinkronisasi gagal.
* Status konflik harus ditangani.

## Keamanan

* Password disimpan dalam bentuk hash.
* Session memiliki masa berlaku.
* Role-based access control.
* Rate limiting.
* Audit log.
* HTTPS.
* Validasi input.
* Perlindungan terhadap injection.
* Data sensitif dibatasi sesuai role.

## Privasi

* Pengguna hanya melihat data yang diperlukan.
* Pasien tidak dapat melihat pasien lain.
* Perawat hanya melihat pasien yang ditugaskan.
* Log aktivitas disimpan secara aman.
* Data ekspor dibatasi.

## Skalabilitas

Sistem harus dapat berkembang dari:

* Satu unit.
* Beberapa unit.
* Beberapa lokasi.
* Ratusan pasien.
* Ratusan perawat.
* Ribuan tugas per hari.

---

# 29. Struktur Data Konseptual

## Users

* id
* full_name
* phone
* email
* password_hash
* role
* profile_photo
* status
* last_login
* created_at
* updated_at

## Nurses

* id
* user_id
* employee_number
* unit_id
* license_number
* shift_type
* status

## Patients

* id
* user_id
* patient_number
* room_id
* date_of_birth
* gender
* emergency_contact
* admission_date
* special_notes
* status

## Units

* id
* name
* location
* description
* status

## Rooms

* id
* unit_id
* room_number
* floor
* capacity
* status

## Nurse Patient Assignments

* id
* nurse_id
* patient_id
* shift_id
* role_type
* assigned_at
* ended_at
* status

## Care Tasks

* id
* patient_id
* assigned_nurse_id
* created_by
* task_type_id
* title
* instruction
* scheduled_at
* tolerance_minutes
* estimated_duration
* priority
* status
* started_at
* completed_at
* completion_note
* delay_reason
* cancellation_reason
* created_at
* updated_at

## Task Logs

* id
* task_id
* user_id
* previous_status
* new_status
* note
* created_at

## Shifts

* id
* unit_id
* name
* start_time
* end_time
* date
* status

## Handover Reports

* id
* from_shift_id
* to_shift_id
* created_by
* accepted_by
* summary
* status
* created_at
* accepted_at

## Notifications

* id
* user_id
* task_id
* type
* title
* message
* priority
* read_at
* created_at

## Nurse Calls

* id
* patient_id
* assigned_nurse_id
* status
* requested_at
* accepted_at
* completed_at

## Audit Logs

* id
* user_id
* action
* entity_type
* entity_id
* old_value
* new_value
* ip_address
* created_at

---

# 30. API Konseptual

## Authentication

* POST `/auth/login`
* POST `/auth/logout`
* POST `/auth/refresh`
* GET `/auth/profile`

## Patients

* GET `/patients`
* POST `/patients`
* GET `/patients/{id}`
* PUT `/patients/{id}`
* GET `/patients/{id}/tasks`
* GET `/patients/{id}/history`

## Nurses

* GET `/nurses`
* GET `/nurses/{id}`
* GET `/nurses/{id}/patients`
* GET `/nurses/{id}/workload`

## Tasks

* GET `/tasks`
* POST `/tasks`
* GET `/tasks/{id}`
* PUT `/tasks/{id}`
* POST `/tasks/{id}/start`
* POST `/tasks/{id}/complete`
* POST `/tasks/{id}/delay`
* POST `/tasks/{id}/reassign`
* POST `/tasks/{id}/cancel`

## Assignments

* GET `/assignments`
* POST `/assignments`
* PUT `/assignments/{id}`
* DELETE `/assignments/{id}`

## Dashboard

* GET `/dashboard/nurse`
* GET `/dashboard/head-nurse`
* GET `/dashboard/patient`
* GET `/dashboard/admin`

## Handover

* GET `/handovers`
* POST `/handovers`
* POST `/handovers/{id}/submit`
* POST `/handovers/{id}/accept`

## Reports

* GET `/reports/tasks`
* GET `/reports/nurses`
* GET `/reports/patients`
* GET `/reports/units`

---

# 31. User Flow Utama

## Perawat Menyelesaikan Tugas

Login
→ Dashboard
→ Lihat Tugas Berikutnya
→ Buka Detail Tugas
→ Mulai Tindakan
→ Lakukan Perawatan
→ Selesaikan Tindakan
→ Isi Catatan
→ Simpan
→ Status Berubah Menjadi Selesai
→ Riwayat Diperbarui

## Kepala Perawat Membagi Pasien

Login
→ Dashboard Operasional
→ Buka Penugasan
→ Pilih Perawat
→ Pilih Pasien
→ Tentukan Shift
→ Periksa Beban Kerja
→ Simpan Penugasan
→ Perawat Mendapat Notifikasi

## Pasien Memanggil Perawat

Login
→ Beranda
→ Tekan Panggil Perawat
→ Konfirmasi
→ Permintaan Dikirim
→ Perawat Menerima
→ Pasien Melihat Status
→ Perawat Datang
→ Permintaan Diselesaikan

## Serah Terima Shift

Buka Serah Terima
→ Sistem Membuat Ringkasan
→ Tambahkan Catatan
→ Kirim ke Shift Berikutnya
→ Perawat Berikutnya Membaca
→ Konfirmasi Penerimaan
→ Serah Terima Selesai

---

# 32. Acceptance Criteria Utama

## Dashboard Perawat

* Sapaan berubah berdasarkan waktu.
* Jam real-time tampil.
* Tugas terdekat diurutkan berdasarkan waktu dan prioritas.
* Tugas terlambat terlihat jelas.
* Kartu statistik dapat diklik.
* Data hanya menampilkan pasien yang ditugaskan.

## Penyelesaian Tugas

* Tugas tidak dapat selesai tanpa konfirmasi.
* Waktu penyelesaian tersimpan.
* Catatan wajib untuk tugas terlambat.
* Status dashboard berubah tanpa memuat ulang halaman.
* Aktivitas tercatat dalam audit log.

## Multi-Pasien

* Satu perawat dapat menangani minimal lima pasien.
* Setiap pasien memiliki jadwal berbeda.
* Filter pasien bekerja.
* Perawat dapat berpindah detail pasien tanpa kehilangan konteks.
* Data setiap pasien tidak tercampur.

## Notifikasi

* Tugas mendatang menghasilkan pengingat.
* Tugas terlambat menghasilkan alert.
* Notifikasi tidak dikirim dua kali tanpa alasan.
* Notifikasi yang dibuka mengarah ke tugas terkait.

## Responsivitas

* Sidebar tetap terlihat pada desktop.
* Sidebar tidak tampil pada mobile.
* Bottom navigation tampil pada mobile.
* Semua form dapat digunakan pada layar kecil.
* Tidak terdapat horizontal scrolling pada halaman utama.

---

# 33. Metrik Keberhasilan

## Product Metrics

* Persentase tugas selesai.
* Persentase tugas tepat waktu.
* Jumlah tugas terlambat.
* Rata-rata waktu respons.
* Jumlah tugas tanpa penanggung jawab.
* Persentase serah terima selesai.
* Penggunaan aplikasi per shift.
* Jumlah pasien per perawat.

## UX Metrics

* Task completion rate.
* Time on task.
* Error rate.
* Number of assistance requests.
* System Usability Scale.
* User satisfaction.
* Learnability.
* Navigation success rate.

## Target Awal

* Minimal 90% tugas pengujian berhasil diselesaikan.
* Rata-rata skor SUS minimal 75.
* Pengguna menemukan tugas berikutnya kurang dari 10 detik.
* Pengguna menyelesaikan pencatatan tugas kurang dari satu menit.
* Tidak ada critical usability issue.
* Tidak ada informasi penting yang hanya dibedakan melalui warna.

---

# 34. Tahapan Pengembangan

## Tahap 1 — Prototype UI/UX

* Dashboard perawat.
* Dashboard pasien.
* Dashboard kepala perawat.
* Daftar pasien.
* Detail pasien.
* Daftar tugas.
* Detail tugas.
* Form penyelesaian.
* Riwayat.
* Responsive prototype.
* Usability testing.

## Tahap 2 — MVP

* Login.
* Database.
* Role.
* Multi-pasien.
* Penugasan.
* CRUD tugas.
* Status real-time.
* Riwayat.
* Notifikasi in-app.
* Dashboard.
* Responsive PWA.

## Tahap 3 — Operational Release

* Push notification.
* Serah terima shift.
* Laporan.
* Audit log.
* Offline mode.
* Sinkronisasi.
* Panggil perawat.
* Workload monitoring.

## Tahap 4 — Advanced

* Multi-unit.
* Multi-location.
* Integrasi perangkat.
* Integrasi sistem eksternal.
* Rule-based escalation.
* Predictive workload.
* Advanced analytics.

---

# 35. Prioritas MVP

## Must Have

* Login dan role.
* Dashboard perawat.
* Multi-pasien.
* Daftar tugas.
* Detail tugas.
* Status tugas.
* Penyelesaian tindakan.
* Catatan tindakan.
* Riwayat.
* Dashboard kepala perawat.
* Penugasan pasien.
* Responsive mobile.
* Database.

## Should Have

* Kalender.
* Push notification.
* Panggil perawat.
* Serah terima shift.
* Laporan sederhana.
* Beban kerja perawat.
* Offline caching.

## Could Have

* Lampiran foto.
* QR pasien.
* Export PDF.
* Grafik lanjutan.
* Theme customization.
* Multi-language.

## Won’t Have pada MVP

* Diagnosis.
* Billing.
* Farmasi.
* Telemedicine.
* Rekomendasi medis otomatis.
* Integrasi alat kesehatan.

---

# 36. Skenario Demo Produk

Perawat Rina login pada pukul 07.45.

Dashboard menampilkan:

* Good Morning, Perawat Rina.
* Lima pasien dipantau.
* Delapan belas tugas hari ini.
* Sembilan tugas selesai.
* Dua tugas memerlukan perhatian.
* Satu tugas terlambat.

Tugas berikutnya:

08.00 — Ibu Siti
Pemberian obat pagi
Kamar 201

Perawat membuka detail tugas dan menekan **Mulai Tindakan**.

Setelah tindakan selesai, perawat menekan **Selesaikan Tindakan**, menambahkan catatan, lalu menyimpan.

Sistem menampilkan:

**Tindakan berhasil diselesaikan. Terima kasih telah memperbarui kondisi pasien. 😊**

Status tugas berubah menjadi Selesai.

Dashboard otomatis memperbarui:

* Tugas selesai bertambah.
* Tugas berikutnya berubah.
* Riwayat Ibu Siti diperbarui.
* Kepala perawat dapat melihat tindakan selesai.
* Pasien melihat bahwa tindakan sudah dilakukan.

Pada dashboard kepala perawat, terdapat pasien lain yang memiliki tugas terlambat. Kepala perawat membuka tugas, melihat petugas yang bertanggung jawab, lalu mengalihkan tugas kepada perawat dengan beban kerja lebih rendah.

Semua perubahan tercatat dalam audit log.

---

# 37. Kesimpulan

CareTrack dirancang sebagai aplikasi manajemen tugas perawatan pasien yang menghubungkan perawat, pasien, kepala perawat, dan admin dalam satu sistem operasional.

Kekuatan utama CareTrack terletak pada:

* Dashboard yang informatif.
* Pemantauan multi-pasien.
* Pengelolaan tugas berbasis waktu.
* Status real-time.
* Notifikasi dan eskalasi.
* Riwayat yang tidak dapat dimanipulasi.
* Penugasan perawat.
* Serah terima shift.
* Dukungan mobile dan desktop.
* Pengalaman penggunaan yang ramah, profesional, dan mudah dipahami.

CareTrack bukan sekadar aplikasi pengingat. CareTrack berfungsi sebagai pusat koordinasi aktivitas perawatan untuk memastikan setiap pasien menerima tindakan yang tepat, dari petugas yang tepat, pada waktu yang tepat.
=======
# PRODUCT REQUIREMENTS DOCUMENT

## CareTrack

### Aplikasi Penjadwalan dan Pemantauan Tugas Perawatan Pasien

**Versi:** 1.0
**Status:** Draft Produk
**Platform:** Responsive Web Application dan Progressive Web App
**Target perangkat:** Desktop, tablet, dan smartphone
**Target implementasi:** Panti lansia, layanan home care, klinik, dan unit perawatan pasien
**Bahasa utama:** Bahasa Indonesia

---

# 1. Ringkasan Produk

CareTrack adalah aplikasi manajemen tugas perawatan yang membantu perawat, caregiver, dan kepala perawat dalam menjadwalkan, menjalankan, memantau, serta mendokumentasikan tindakan perawatan terhadap banyak pasien.

Dalam satu shift, seorang perawat dapat bertanggung jawab terhadap beberapa pasien dengan kebutuhan berbeda. Setiap pasien dapat memiliki jadwal pemberian obat, pemeriksaan tanda vital, penggantian cairan infus, bantuan makan, perawatan kebersihan, observasi kondisi, dan tindakan lainnya.

CareTrack menyediakan dashboard operasional yang menampilkan tugas berdasarkan waktu, tingkat prioritas, pasien, ruangan, dan status penyelesaian. Sistem secara otomatis menandai tugas yang sudah memasuki waktu pelaksanaan, mendeteksi tugas terlambat, mengirimkan pengingat, dan menyimpan riwayat tindakan.

CareTrack tidak digunakan untuk memberikan diagnosis, menentukan dosis obat, atau menggantikan keputusan tenaga medis. Aplikasi berfungsi sebagai sistem koordinasi, pengingat, pemantauan, dan dokumentasi tugas yang sebelumnya sudah ditentukan oleh tenaga berwenang.

---

# 2. Visi Produk

Menciptakan sistem perawatan pasien yang lebih terorganisasi, tepat waktu, transparan, dan mudah dipantau sehingga perawat dapat memberikan pelayanan secara konsisten tanpa kehilangan informasi penting di tengah banyaknya pasien dan tugas dalam satu shift.

---

# 3. Latar Belakang Masalah

Perawat dan caregiver sering menangani beberapa pasien dalam waktu yang bersamaan. Setiap pasien memiliki kebutuhan, waktu tindakan, dan tingkat prioritas yang berbeda.

Dalam proses manual, jadwal perawatan biasanya dicatat pada kertas, papan tulis, pesan grup, spreadsheet, atau hanya diingat oleh petugas. Cara tersebut dapat menimbulkan beberapa masalah:

1. Perawat kesulitan mengetahui tugas yang harus didahulukan.
2. Jadwal tindakan dapat terlupakan ketika situasi sedang sibuk.
3. Informasi pasien tersebar pada beberapa media.
4. Kepala perawat sulit melihat progres tugas secara real-time.
5. Pergantian shift berpotensi menyebabkan informasi terlewat.
6. Riwayat tindakan tidak terdokumentasi secara konsisten.
7. Tidak terdapat peringatan otomatis ketika tugas terlambat.
8. Pembagian pasien kepada perawat tidak selalu terlihat dengan jelas.
9. Perawat harus membuka banyak catatan untuk melihat kebutuhan satu pasien.
10. Pasien tidak mengetahui jadwal tindakan berikutnya.

CareTrack dirancang untuk menyatukan seluruh kebutuhan tersebut dalam satu aplikasi yang terstruktur dan mudah digunakan.

---

# 4. Pernyataan Masalah

Perawat yang menangani beberapa pasien membutuhkan sistem yang dapat membantu mereka mengetahui tugas berikutnya, melihat tugas prioritas, menerima pengingat, mencatat penyelesaian tindakan, serta memantau seluruh pasien secara cepat tanpa harus bergantung pada catatan manual yang tersebar.

Kepala perawat juga membutuhkan tampilan terpusat untuk mengetahui pembagian pasien, progres tugas, tindakan terlambat, dan kondisi operasional setiap shift.

---

# 5. Tujuan Produk

## 5.1 Tujuan Utama

1. Membantu perawat menjalankan tugas perawatan tepat waktu.
2. Memudahkan pemantauan beberapa pasien dalam satu dashboard.
3. Mengurangi risiko tugas terlupakan atau terlambat.
4. Menyediakan dokumentasi tindakan yang terstruktur.
5. Memudahkan koordinasi dan pergantian shift.
6. Memberikan visibilitas operasional kepada kepala perawat.
7. Menyediakan pengalaman penggunaan yang sederhana dan responsif.

## 5.2 Tujuan Pengalaman Pengguna

1. Perawat dapat mengetahui tugas berikutnya dalam waktu kurang dari lima detik.
2. Perawat dapat menyelesaikan dan mencatat satu tindakan dalam maksimal tiga langkah utama.
3. Status tugas dapat dipahami tanpa membuka halaman detail.
4. Informasi pasien dapat ditemukan melalui pencarian atau filter.
5. Pengguna dapat menggunakan aplikasi melalui HP ketika sedang bergerak.
6. Kepala perawat dapat memahami kondisi satu shift melalui satu dashboard.
7. Pasien lansia dapat memahami jadwal berikutnya tanpa navigasi yang rumit.

---

# 6. Sasaran Pengguna

## 6.1 Perawat atau Caregiver

Pengguna utama yang bertanggung jawab menjalankan tindakan perawatan.

Kebutuhan utama:

* Mengetahui pasien yang menjadi tanggung jawabnya.
* Melihat tugas hari ini.
* Mengetahui tugas terdekat dan terlambat.
* Memulai dan menyelesaikan tindakan.
* Menambahkan catatan tindakan.
* Melihat riwayat pasien.
* Melakukan serah terima shift.
* Mendapatkan notifikasi.

## 6.2 Kepala Perawat atau Supervisor

Pengguna yang bertanggung jawab terhadap pengawasan operasional.

Kebutuhan utama:

* Melihat seluruh perawat dan pasien.
* Membagi pasien kepada perawat.
* Membuat serta mengubah jadwal tugas.
* Melihat tugas yang selesai dan terlambat.
* Memantau beban kerja perawat.
* Melakukan eskalasi ketika tugas penting terlambat.
* Melihat laporan performa per shift.

## 6.3 Admin

Pengguna yang mengelola konfigurasi sistem.

Kebutuhan utama:

* Membuat akun pengguna.
* Mengatur role dan hak akses.
* Mengelola unit, ruangan, dan jenis tindakan.
* Menonaktifkan akun.
* Mengakses audit log.
* Mengelola pengaturan notifikasi.

## 6.4 Pasien

Pengguna dengan akses sederhana untuk melihat informasi perawatan yang relevan.

Kebutuhan utama:

* Melihat jadwal hari ini.
* Mengetahui tindakan berikutnya.
* Mengetahui nama perawat yang bertugas.
* Melihat status kedatangan perawat.
* Memanggil perawat.
* Melihat informasi dasar yang mudah dipahami.

---

# 7. Ruang Lingkup Produk

## 7.1 Termasuk dalam Scope

* Autentikasi pengguna.
* Manajemen akun perawat dan pasien.
* Dashboard perawat.
* Dashboard kepala perawat.
* Dashboard pasien.
* Manajemen data pasien.
* Penugasan pasien kepada perawat.
* Manajemen jadwal tindakan.
* Status tindakan secara real-time.
* Notifikasi tugas.
* Riwayat tindakan.
* Catatan penyelesaian.
* Pergantian shift.
* Pencarian dan filter.
* Laporan operasional.
* Audit log.
* Responsive design.
* Mode aksesibilitas.
* Progressive Web App.

## 7.2 Tidak Termasuk dalam Scope Awal

* Diagnosis pasien.
* Rekomendasi medis otomatis.
* Penentuan dosis obat.
* Sistem farmasi.
* Stok obat dan alat medis.
* Pembayaran dan billing.
* Klaim asuransi.
* Integrasi laboratorium.
* Telemedicine.
* Rekam medis elektronik penuh.
* Integrasi alat kesehatan.
* Emergency dispatch.
* Chat dokter dan pasien.
* Video consultation.

---

# 8. Struktur Role dan Hak Akses

| Fitur                          |  Perawat | Kepala Perawat |          Admin | Pasien |
| ------------------------------ | -------: | -------------: | -------------: | -----: |
| Melihat dashboard pribadi      |       Ya |             Ya |             Ya |     Ya |
| Melihat pasien yang ditugaskan |       Ya |             Ya |             Ya |  Tidak |
| Melihat seluruh pasien         |    Tidak |             Ya |             Ya |  Tidak |
| Membuat pasien                 |    Tidak |             Ya |             Ya |  Tidak |
| Mengubah data pasien           | Terbatas |             Ya |             Ya |  Tidak |
| Membuat tugas                  | Terbatas |             Ya |             Ya |  Tidak |
| Menjalankan tindakan           |       Ya |             Ya |          Tidak |  Tidak |
| Menyelesaikan tindakan         |       Ya |             Ya |          Tidak |  Tidak |
| Mengubah tugas selesai         |    Tidak |       Terbatas |             Ya |  Tidak |
| Menghapus riwayat              |    Tidak |          Tidak |          Tidak |  Tidak |
| Melihat laporan                |  Pribadi |   Seluruh unit | Seluruh sistem |  Tidak |
| Membuat akun                   |    Tidak |       Terbatas |             Ya |  Tidak |
| Mengatur role                  |    Tidak |          Tidak |             Ya |  Tidak |
| Memanggil perawat              |    Tidak |          Tidak |          Tidak |     Ya |

Riwayat tindakan tidak dapat dihapus melalui antarmuka normal. Koreksi dilakukan melalui mekanisme perubahan terkontrol dan dicatat dalam audit log.

---

# 9. Arsitektur Informasi

## 9.1 Navigasi Perawat

1. Dashboard
2. Tugas
3. Pasien
4. Kalender
5. Riwayat
6. Serah Terima
7. Notifikasi
8. Profil

## 9.2 Navigasi Kepala Perawat

1. Dashboard
2. Operasional
3. Tugas
4. Pasien
5. Perawat
6. Penugasan
7. Kalender
8. Laporan
9. Serah Terima
10. Pengaturan

## 9.3 Navigasi Admin

1. Dashboard
2. Pengguna
3. Unit dan Ruangan
4. Jenis Tindakan
5. Hak Akses
6. Audit Log
7. Konfigurasi
8. Profil

## 9.4 Navigasi Pasien

1. Beranda
2. Jadwal
3. Panggil Perawat
4. Profil

---

# 10. Dashboard Perawat

## 10.1 Header Dashboard

Dashboard menampilkan sapaan dinamis berdasarkan waktu.

Contoh:

**Good Morning, Perawat Rina**
Berikut ringkasan tugas dan kondisi pasien untuk shift pagi.

Informasi pendukung:

* Hari dan tanggal.
* Waktu real-time.
* Nama unit.
* Shift aktif.
* Foto profil.
* Tombol notifikasi.
* Status koneksi.
* Tombol ganti shift jika diizinkan.

Sapaan:

* 05.00–10.59: Good Morning
* 11.00–14.59: Good Afternoon
* 15.00–18.29: Good Evening
* 18.30–04.59: Good Night

Dalam versi Bahasa Indonesia, sapaan dapat ditampilkan sebagai:

* Selamat pagi.
* Selamat siang.
* Selamat sore.
* Selamat malam.

## 10.2 Ringkasan Utama

Dashboard menampilkan kartu statistik:

* Pasien Dipantau.
* Total Tugas Hari Ini.
* Tugas Selesai.
* Perlu Perhatian.
* Tugas Terlambat.
* Tugas Prioritas Tinggi.

Contoh:

| Statistik       | Nilai |
| --------------- | ----: |
| Pasien dipantau |     5 |
| Total tugas     |    18 |
| Selesai         |     9 |
| Akan datang     |     5 |
| Perlu perhatian |     3 |
| Terlambat       |     1 |

Setiap kartu dapat diklik untuk membuka daftar yang sudah difilter.

## 10.3 Tugas Berikutnya

Bagian paling utama pada dashboard.

Menampilkan maksimal lima tugas terdekat berdasarkan waktu dan prioritas.

Informasi pada kartu tugas:

* Waktu.
* Nama pasien.
* Foto atau inisial pasien.
* Nomor kamar.
* Jenis tindakan.
* Prioritas.
* Status.
* Waktu tersisa.
* Tombol tindakan utama.

Contoh:

**08.00 — Ibu Siti**
Kamar 201
Pemberian obat tekanan darah
Waktunya sekarang

Tombol:

* Mulai Tindakan.
* Lihat Detail.

## 10.4 Tugas Perlu Perhatian

Bagian khusus yang menampilkan:

* Tugas terlambat.
* Tugas prioritas tinggi.
* Tugas yang ditunda.
* Tugas tanpa petugas.
* Tugas dengan catatan penting.
* Tugas yang belum dikonfirmasi.

Copy profesional:

**Ada 3 tugas yang memerlukan perhatian**

Bukan:

**3 tugas bermasalah**

## 10.5 Ringkasan Pasien

Menampilkan kartu setiap pasien yang ditugaskan.

Informasi:

* Nama pasien.
* Kamar.
* Usia.
* Jumlah tugas hari ini.
* Tugas berikutnya.
* Status perhatian.
* Nama perawat utama.
* Indikator catatan khusus.

Status pasien:

* Stabil.
* Perlu Pemantauan.
* Tindakan Terlambat.
* Tidak Ada Jadwal Berikutnya.

Status bukan diagnosis medis dan hanya merepresentasikan kondisi operasional tugas.

## 10.6 Timeline Shift

Menampilkan distribusi tugas dari awal hingga akhir shift.

Contoh:

* 07.00 — Pemeriksaan tanda vital.
* 08.00 — Pemberian obat.
* 09.00 — Bantuan makan.
* 10.00 — Penggantian infus.
* 11.00 — Observasi.
* 12.00 — Serah terima.

Timeline dapat difilter berdasarkan pasien atau jenis tindakan.

## 10.7 Quick Actions

* Tambah Tugas.
* Scan Pasien.
* Cari Pasien.
* Mulai Serah Terima.
* Laporkan Kendala.
* Panggil Bantuan.

Quick action hanya menampilkan fungsi yang diizinkan berdasarkan role.

---

# 11. Dashboard Kepala Perawat

## 11.1 Ringkasan Operasional

Header:

**Good Morning, Kepala Perawat Maya**
Berikut kondisi operasional Unit Lansia A pada shift pagi.

Kartu statistik:

* Perawat Bertugas.
* Pasien Aktif.
* Total Tugas.
* Tingkat Penyelesaian.
* Tugas Terlambat.
* Tugas Belum Memiliki Perawat.
* Insiden atau Eskalasi.
* Beban Kerja Tertinggi.

## 11.2 Monitoring Perawat

Tabel atau kartu perawat:

| Perawat | Pasien | Tugas | Selesai | Terlambat | Beban Kerja |
| ------- | -----: | ----: | ------: | --------: | ----------- |
| Rina    |      5 |    18 |       9 |         1 | Tinggi      |
| Dedi    |      4 |    14 |      10 |         0 | Normal      |
| Maya    |      3 |     9 |       8 |         0 | Ringan      |

Beban kerja dihitung berdasarkan:

* Jumlah pasien.
* Jumlah tugas.
* Tingkat prioritas.
* Durasi estimasi.
* Jumlah tugas dalam waktu yang berdekatan.

## 11.3 Monitoring Pasien

Menampilkan pasien dengan:

* Tugas terlambat.
* Tindakan prioritas tinggi.
* Perawat belum ditugaskan.
* Catatan penting.
* Aktivitas terbaru.
* Tindakan berikutnya.

## 11.4 Operational Alert

Jenis alert:

* Tugas prioritas tinggi terlambat.
* Pasien memanggil perawat.
* Tugas belum memiliki penanggung jawab.
* Perawat memiliki beban kerja berlebih.
* Jadwal tugas bertabrakan.
* Serah terima belum selesai.
* Perawat belum login saat shift dimulai.

## 11.5 Grafik Operasional

Grafik yang ditampilkan:

* Penyelesaian tugas per jam.
* Persentase tugas tepat waktu.
* Jumlah tugas per jenis.
* Beban kerja per perawat.
* Tugas terlambat per hari.
* Distribusi tugas per pasien.

Grafik tidak boleh memenuhi seluruh dashboard. Data tindakan tetap menjadi fokus utama.

---

# 12. Dashboard Pasien

Dashboard pasien harus sangat sederhana dan ramah lansia.

## 12.1 Header

**Selamat pagi, Ibu Siti**

Di bawahnya:

Hari ini, Senin 10 Agustus
Kamar 201

## 12.2 Tindakan Berikutnya

Kartu utama dengan ukuran besar.

**Tindakan berikutnya**

08.00
Pemberian obat pagi

Perawat Rina akan membantu Anda.

Status:

* Akan datang.
* Perawat sedang menuju kamar.
* Sedang dilakukan.
* Selesai.

## 12.3 Tombol Panggil Perawat

Tombol besar:

**Panggil Perawat**

Setelah ditekan:

* Sistem meminta konfirmasi.
* Notifikasi masuk ke perawat yang bertugas.
* Pasien melihat status permintaan.
* Permintaan tidak dapat dikirim berkali-kali selama masih aktif.

Status:

* Permintaan dikirim.
* Perawat menerima.
* Perawat menuju kamar.
* Permintaan selesai.

## 12.4 Jadwal Hari Ini

Menampilkan jadwal dalam bentuk timeline sederhana.

* 08.00 Obat pagi.
* 09.30 Pemeriksaan tekanan darah.
* 12.00 Bantuan makan.
* 15.00 Pemeriksaan kondisi.

Pasien tidak dapat mengubah jadwal.

---

# 13. Modul Manajemen Pasien

## 13.1 Daftar Pasien

Kolom:

* Nama pasien.
* Nomor pasien.
* Kamar.
* Usia.
* Perawat penanggung jawab.
* Tugas berikutnya.
* Jumlah tugas hari ini.
* Status operasional.
* Tindakan.

Fitur:

* Pencarian nama.
* Filter kamar.
* Filter perawat.
* Filter status.
* Pengurutan berdasarkan tugas berikutnya.
* Tampilan kartu dan tabel.
* Pagination atau infinite scrolling.

## 13.2 Detail Pasien

Breadcrumb:

**Pasien / Ibu Siti / Ringkasan**

Bagian detail:

1. Ringkasan.
2. Jadwal.
3. Riwayat Tindakan.
4. Catatan.
5. Perawat.
6. Informasi Dasar.

Header detail:

* Nama pasien.
* Foto atau inisial.
* Nomor pasien.
* Kamar.
* Usia.
* Perawat aktif.
* Tugas berikutnya.
* Status perhatian.

## 13.3 Informasi Pasien

Data minimum:

* Nama lengkap.
* Nomor identitas internal.
* Tanggal lahir.
* Jenis kelamin.
* Nomor kamar.
* Unit.
* Kontak darurat.
* Catatan kebutuhan khusus.
* Status aktif.
* Tanggal masuk.
* Foto opsional.

Data sensitif harus dibatasi sesuai role.

---

# 14. Modul Tugas Perawatan

## 14.1 Jenis Tugas

Kategori awal:

1. Pemberian Obat.
2. Pemeriksaan Tanda Vital.
3. Penggantian Cairan Infus.
4. Bantuan Makan.
5. Perawatan Kebersihan.
6. Mobilisasi Pasien.
7. Pemeriksaan Kondisi Umum.
8. Pendampingan Aktivitas.
9. Penggantian Perban.
10. Tindakan Lainnya.

## 14.2 Data Tugas

Setiap tugas memiliki:

* ID tugas.
* Pasien.
* Perawat.
* Kategori.
* Judul tugas.
* Instruksi.
* Tanggal.
* Waktu.
* Estimasi durasi.
* Tingkat prioritas.
* Toleransi keterlambatan.
* Status.
* Dibuat oleh.
* Waktu dibuat.
* Waktu dimulai.
* Waktu selesai.
* Catatan penyelesaian.
* Lampiran opsional.
* Alasan penundaan.
* Alasan pembatalan.

## 14.3 Prioritas Tugas

* Normal.
* Penting.
* Tinggi.
* Mendesak.

Prioritas tidak hanya ditampilkan melalui warna. Setiap prioritas harus memiliki label teks dan ikon.

## 14.4 Status Tugas

### Terjadwal

Tugas sudah dibuat, tetapi waktunya masih jauh.

### Akan Datang

Tugas akan dimulai dalam 30 menit.

### Waktunya

Waktu saat ini sudah mencapai jadwal dan masih berada dalam batas toleransi.

### Sedang Dilakukan

Perawat telah menekan tombol Mulai Tindakan.

### Selesai

Perawat telah menyelesaikan dan menyimpan catatan tindakan.

### Terlambat

Tugas belum dimulai atau diselesaikan setelah melewati batas toleransi.

### Ditunda

Tugas ditunda dengan alasan dan waktu baru.

### Dibatalkan

Tugas dibatalkan oleh pengguna berwenang dengan alasan wajib.

### Dialihkan

Tugas dipindahkan kepada perawat lain.

## 14.5 Aturan Keterlambatan

Default toleransi keterlambatan adalah 30 menit.

Contoh:

* Jadwal: 08.00.
* 07.30–07.59: Akan Datang.
* 08.00–08.29: Waktunya.
* Mulai 08.30: Terlambat.

Toleransi dapat dikonfigurasi berdasarkan jenis tugas.

Contoh:

* Pemberian obat: 15 menit.
* Bantuan makan: 30 menit.
* Pemeriksaan rutin: 30 menit.
* Aktivitas pasien: 60 menit.

Perubahan toleransi hanya dapat dilakukan oleh admin atau kepala perawat.

---

# 15. Alur Penyelesaian Tugas

## 15.1 Memulai Tindakan

Perawat membuka tugas dan menekan:

**Mulai Tindakan**

Sistem menyimpan:

* Perawat yang memulai.
* Waktu mulai.
* Perangkat.
* Status sebelumnya.
* Lokasi opsional jika diizinkan.

Status berubah menjadi:

**Sedang Dilakukan**

## 15.2 Menyelesaikan Tindakan

Perawat menekan:

**Selesaikan Tindakan**

Form penyelesaian:

* Hasil tindakan.
* Catatan.
* Kondisi pasien setelah tindakan.
* Lampiran opsional.
* Tindak lanjut.
* Checkbox konfirmasi.

Setelah disimpan:

* Status menjadi Selesai.
* Waktu selesai dicatat.
* Riwayat diperbarui.
* Dashboard diperbarui.
* Kepala perawat dapat melihat hasilnya.

Pesan sukses:

**Tindakan berhasil diselesaikan. Terima kasih telah memperbarui kondisi pasien. 😊**

Untuk pasien:

**Tindakan telah selesai. Semoga kondisi Anda semakin membaik. 😊**

## 15.3 Penyelesaian Terlambat

Jika tindakan diselesaikan setelah melewati toleransi:

Status riwayat:

**Selesai Terlambat**

Sistem meminta alasan:

* Kondisi pasien lain lebih mendesak.
* Menunggu instruksi.
* Menunggu alat.
* Pasien belum siap.
* Kendala operasional.
* Alasan lainnya.

Alasan wajib diisi.

---

# 16. Modul Kalender dan Jadwal

Tampilan kalender:

* Harian.
* Mingguan.
* Bulanan.
* Timeline per shift.

Filter:

* Pasien.
* Perawat.
* Jenis tindakan.
* Status.
* Prioritas.
* Unit.
* Ruangan.

Fitur:

* Drag and drop untuk kepala perawat pada desktop.
* Reschedule.
* Duplicate task.
* Recurring task.
* Conflict detection.
* Shift filtering.
* Bulk assignment.
* Export jadwal.

Recurring task:

* Setiap hari.
* Hari tertentu.
* Setiap beberapa jam.
* Rentang tanggal.
* Sampai dihentikan.

---

# 17. Modul Penugasan Pasien

Kepala perawat dapat menentukan pasien yang menjadi tanggung jawab setiap perawat.

Data penugasan:

* Perawat.
* Pasien.
* Unit.
* Shift.
* Tanggal mulai.
* Tanggal selesai.
* Peran utama atau pendamping.
* Status penugasan.

Aturan:

1. Satu pasien dapat memiliki perawat utama dan pendamping.
2. Satu perawat dapat menangani beberapa pasien.
3. Sistem memberikan peringatan jika beban kerja terlalu tinggi.
4. Perubahan penugasan dicatat dalam audit log.
5. Pengalihan pasien harus memiliki alasan.
6. Perawat hanya melihat pasien yang ditugaskan, kecuali memiliki izin tambahan.

---

# 18. Modul Serah Terima Shift

## 18.1 Tujuan

Memastikan informasi penting tidak hilang ketika terjadi pergantian shift.

## 18.2 Isi Serah Terima

* Pasien yang dipantau.
* Tugas selesai.
* Tugas belum selesai.
* Tugas terlambat.
* Tugas yang ditunda.
* Catatan khusus.
* Permintaan pasien.
* Tindakan berikutnya.
* Tugas prioritas.
* Kendala operasional.

## 18.3 Alur

1. Perawat shift lama membuka Serah Terima.
2. Sistem mengisi ringkasan otomatis.
3. Perawat menambahkan catatan.
4. Perawat berikutnya membaca ringkasan.
5. Perawat berikutnya memberikan konfirmasi.
6. Kepala perawat dapat melihat status serah terima.

Status:

* Belum Dibuat.
* Draft.
* Menunggu Konfirmasi.
* Diterima.
* Perlu Revisi.

---

# 19. Sistem Notifikasi

## 19.1 Notifikasi Perawat

* Tugas akan dimulai 15 menit lagi.
* Tugas sudah memasuki waktunya.
* Tugas terlambat.
* Pasien memanggil.
* Tugas dialihkan.
* Jadwal berubah.
* Kepala perawat memberikan catatan.
* Serah terima menunggu konfirmasi.

## 19.2 Notifikasi Kepala Perawat

* Tugas penting terlambat.
* Tugas belum memiliki petugas.
* Perawat belum memulai shift.
* Beban kerja tidak seimbang.
* Pasien memanggil terlalu lama.
* Terdapat tugas gagal diselesaikan.
* Serah terima belum selesai.

## 19.3 Kanal Notifikasi

* In-app notification.
* Browser notification.
* Push notification.
* Getaran perangkat.
* Nada notifikasi.
* Email untuk laporan tertentu.

## 19.4 Aturan Notifikasi

Notifikasi tidak boleh membanjiri pengguna.

Sistem harus:

* Mengelompokkan notifikasi serupa.
* Memberi prioritas.
* Menyediakan mode senyap.
* Menghindari notifikasi ganda.
* Menghapus notifikasi yang sudah tidak relevan.
* Melakukan eskalasi jika tugas prioritas tinggi diabaikan.

---

# 20. Pencarian dan Filter

Global search dapat mencari:

* Nama pasien.
* Nomor pasien.
* Kamar.
* Nama perawat.
* Judul tugas.
* Jenis tindakan.

Filter cepat:

* Hari ini.
* Tugas saya.
* Terlambat.
* Prioritas tinggi.
* Belum ditugaskan.
* Selesai.
* Unit saya.
* Shift aktif.

Filter yang dipilih harus terlihat dan mudah dihapus.

---

# 21. Riwayat dan Audit Log

## 21.1 Riwayat Tindakan

Riwayat menampilkan:

* Nama tindakan.
* Pasien.
* Perawat.
* Jadwal.
* Waktu mulai.
* Waktu selesai.
* Status.
* Catatan.
* Alasan keterlambatan.
* Perubahan data.

Riwayat tidak dapat dihapus oleh pasien atau perawat.

## 21.2 Koreksi Riwayat

Jika terdapat kesalahan:

1. Pengguna mengajukan koreksi.
2. Kepala perawat atau admin menyetujui.
3. Data lama tetap tersimpan.
4. Data baru menjadi versi aktif.
5. Perubahan masuk ke audit log.

## 21.3 Audit Log

Mencatat:

* Login dan logout.
* Pembuatan akun.
* Perubahan role.
* Pembuatan pasien.
* Perubahan pasien.
* Pembuatan tugas.
* Perubahan jadwal.
* Pengalihan tugas.
* Penyelesaian tindakan.
* Koreksi riwayat.
* Perubahan konfigurasi.

---

# 22. Laporan dan Analitik

## 22.1 Laporan Perawat

* Jumlah tugas.
* Persentase selesai.
* Persentase tepat waktu.
* Jumlah terlambat.
* Rata-rata waktu penyelesaian.
* Jumlah pasien.
* Distribusi jenis tindakan.

## 22.2 Laporan Unit

* Total tugas per shift.
* Tingkat penyelesaian.
* Tugas terlambat.
* Beban kerja per perawat.
* Pasien dengan tugas terbanyak.
* Waktu sibuk.
* Jenis tugas dominan.
* Jumlah pengalihan tugas.

## 22.3 Filter Laporan

* Tanggal.
* Shift.
* Perawat.
* Pasien.
* Unit.
* Jenis tindakan.
* Status.
* Prioritas.

## 22.4 Ekspor

* PDF.
* CSV.
* Print view.

---

# 23. Desain dan Pengalaman Pengguna

## 23.1 Gaya Visual

Karakter produk:

* Profesional.
* Tenang.
* Bersih.
* Modern.
* Humanis.
* Tidak terasa seperti sistem administrasi lama.
* Tidak terlalu ramai.
* Mudah dipahami saat pengguna sedang sibuk.

## 23.2 Dashboard Style

Dashboard menggunakan konsep:

* Sapaan personal.
* Ringkasan statistik.
* Hierarki informasi yang jelas.
* Card dengan ruang yang cukup.
* Data penting tampil lebih dahulu.
* Quick actions.
* Real-time clock.
* Status operasional.
* Kombinasi table dan card.
* Responsive layout.
* Microinteraction ringan.

## 23.3 Sidebar Desktop

Sidebar harus:

* Memiliki tinggi penuh layar.
* Tetap terlihat saat halaman di-scroll.
* Dapat di-collapse.
* Menampilkan logo.
* Menampilkan menu berdasarkan role.
* Menampilkan unit dan shift aktif.
* Menampilkan profil pengguna di bagian bawah.
* Tidak muncul pada mode mobile.

## 23.4 Navigasi Mobile

Pada smartphone:

* Menggunakan bottom navigation.
* Maksimal lima menu utama.
* Fitur tambahan berada dalam menu Lainnya.
* Tombol tindakan utama mudah dijangkau ibu jari.
* Tidak menggunakan tabel lebar.
* Card dapat ditumpuk secara vertikal.

## 23.5 Breadcrumb

Breadcrumb digunakan pada halaman:

* Detail pasien.
* Detail tugas.
* Detail perawat.
* Laporan.
* Pengaturan.
* Riwayat tindakan.

Contoh:

**Dashboard / Pasien / Ibu Siti / Jadwal**

---

# 24. Sistem Desain

## 24.1 Komponen Utama

* Button.
* Input.
* Select.
* Date picker.
* Time picker.
* Search bar.
* Badge.
* Status pill.
* Patient card.
* Task card.
* Statistic card.
* Table.
* Modal.
* Drawer.
* Toast.
* Alert.
* Timeline.
* Calendar.
* Empty state.
* Skeleton loading.
* Pagination.
* Tabs.
* Breadcrumb.
* Bottom navigation.
* Sidebar.

## 24.2 Status Visual

Status harus memiliki:

* Warna.
* Label.
* Ikon.
* Deskripsi tekstual.

Contoh:

* Akan Datang — ikon jam.
* Waktunya — ikon lonceng.
* Sedang Dilakukan — ikon aktivitas.
* Selesai — ikon centang.
* Terlambat — ikon peringatan.
* Ditunda — ikon jeda.
* Dibatalkan — ikon silang.

## 24.3 Empty State

Contoh:

**Belum ada tugas untuk shift ini**

Semua jadwal yang ditugaskan kepada Anda akan muncul di sini.

Tombol:

**Lihat Kalender**

## 24.4 Error State

Pesan harus menjelaskan:

* Apa yang gagal.
* Kemungkinan penyebab.
* Langkah selanjutnya.

Contoh:

**Tugas belum dapat disimpan**

Periksa kembali data wajib atau koneksi internet, lalu coba lagi.

---

# 25. Aksesibilitas

CareTrack harus mengikuti prinsip WCAG.

Persyaratan:

1. Kontras teks minimal sesuai standar.
2. Ukuran teks dapat diperbesar.
3. Ukuran target ketukan minimal 44 × 44 piksel.
4. Informasi tidak hanya mengandalkan warna.
5. Semua ikon memiliki label atau tooltip.
6. Navigasi keyboard pada desktop.
7. Focus state terlihat jelas.
8. Form memiliki label.
9. Error form dijelaskan melalui teks.
10. Modal dapat ditutup dengan keyboard.
11. Screen reader dapat membaca status tugas.
12. Animasi dapat dikurangi.
13. Bahasa dibuat singkat dan mudah dipahami.
14. Pasien lansia mendapat antarmuka khusus yang lebih sederhana.
15. Tidak menggunakan gesture tersembunyi sebagai satu-satunya cara.

---

# 26. Responsive Behavior

## Desktop

* Sidebar penuh.
* Dashboard multi-kolom.
* Tabel lengkap.
* Grafik.
* Panel detail.
* Kalender mingguan.

## Tablet

* Sidebar dapat di-collapse.
* Dashboard dua kolom.
* Tabel disederhanakan.
* Kalender harian atau mingguan.

## Mobile

* Bottom navigation.
* Dashboard satu kolom.
* Kartu tugas vertikal.
* Tombol sticky untuk tindakan utama.
* Filter dalam bottom sheet.
* Form satu kolom.
* Detail menggunakan accordion bila diperlukan.

---

# 27. Persyaratan Fungsional Utama

## FR-01 Autentikasi

Sistem harus memungkinkan pengguna login berdasarkan akun dan role.

## FR-02 Dashboard Role-Based

Sistem harus menampilkan dashboard berbeda berdasarkan role.

## FR-03 Manajemen Pasien

Kepala perawat dan admin harus dapat membuat dan mengelola pasien.

## FR-04 Penugasan

Kepala perawat harus dapat menghubungkan perawat dengan pasien.

## FR-05 Manajemen Tugas

Pengguna berwenang harus dapat membuat, mengubah, menjadwalkan, dan mengalihkan tugas.

## FR-06 Status Real-Time

Sistem harus memperbarui status berdasarkan waktu dan aktivitas pengguna.

## FR-07 Keterlambatan

Sistem harus menandai tugas terlambat setelah melewati batas toleransi.

## FR-08 Penyelesaian

Perawat harus dapat menyelesaikan tindakan dengan catatan.

## FR-09 Notifikasi

Sistem harus mengirimkan pengingat sesuai jadwal.

## FR-10 Riwayat

Sistem harus menyimpan seluruh tindakan dan perubahan.

## FR-11 Serah Terima

Sistem harus mendukung ringkasan pergantian shift.

## FR-12 Laporan

Kepala perawat harus dapat melihat laporan operasional.

## FR-13 Panggil Perawat

Pasien harus dapat mengirimkan permintaan kepada perawat.

## FR-14 Offline Support

PWA harus tetap menampilkan data terakhir saat koneksi terputus.

## FR-15 Sinkronisasi

Perubahan lokal harus disinkronkan setelah koneksi kembali.

---

# 28. Persyaratan Nonfungsional

## Kinerja

* Dashboard dimuat kurang dari tiga detik pada koneksi normal.
* Interaksi tombol memberi feedback kurang dari 300 milidetik.
* Pencarian menampilkan hasil secara cepat.
* Data besar menggunakan pagination.

## Keandalan

* Data tindakan tidak boleh hilang.
* Penyimpanan harus menggunakan transaksi.
* Sistem menyediakan retry ketika sinkronisasi gagal.
* Status konflik harus ditangani.

## Keamanan

* Password disimpan dalam bentuk hash.
* Session memiliki masa berlaku.
* Role-based access control.
* Rate limiting.
* Audit log.
* HTTPS.
* Validasi input.
* Perlindungan terhadap injection.
* Data sensitif dibatasi sesuai role.

## Privasi

* Pengguna hanya melihat data yang diperlukan.
* Pasien tidak dapat melihat pasien lain.
* Perawat hanya melihat pasien yang ditugaskan.
* Log aktivitas disimpan secara aman.
* Data ekspor dibatasi.

## Skalabilitas

Sistem harus dapat berkembang dari:

* Satu unit.
* Beberapa unit.
* Beberapa lokasi.
* Ratusan pasien.
* Ratusan perawat.
* Ribuan tugas per hari.

---

# 29. Struktur Data Konseptual

## Users

* id
* full_name
* phone
* email
* password_hash
* role
* profile_photo
* status
* last_login
* created_at
* updated_at

## Nurses

* id
* user_id
* employee_number
* unit_id
* license_number
* shift_type
* status

## Patients

* id
* user_id
* patient_number
* room_id
* date_of_birth
* gender
* emergency_contact
* admission_date
* special_notes
* status

## Units

* id
* name
* location
* description
* status

## Rooms

* id
* unit_id
* room_number
* floor
* capacity
* status

## Nurse Patient Assignments

* id
* nurse_id
* patient_id
* shift_id
* role_type
* assigned_at
* ended_at
* status

## Care Tasks

* id
* patient_id
* assigned_nurse_id
* created_by
* task_type_id
* title
* instruction
* scheduled_at
* tolerance_minutes
* estimated_duration
* priority
* status
* started_at
* completed_at
* completion_note
* delay_reason
* cancellation_reason
* created_at
* updated_at

## Task Logs

* id
* task_id
* user_id
* previous_status
* new_status
* note
* created_at

## Shifts

* id
* unit_id
* name
* start_time
* end_time
* date
* status

## Handover Reports

* id
* from_shift_id
* to_shift_id
* created_by
* accepted_by
* summary
* status
* created_at
* accepted_at

## Notifications

* id
* user_id
* task_id
* type
* title
* message
* priority
* read_at
* created_at

## Nurse Calls

* id
* patient_id
* assigned_nurse_id
* status
* requested_at
* accepted_at
* completed_at

## Audit Logs

* id
* user_id
* action
* entity_type
* entity_id
* old_value
* new_value
* ip_address
* created_at

---

# 30. API Konseptual

## Authentication

* POST `/auth/login`
* POST `/auth/logout`
* POST `/auth/refresh`
* GET `/auth/profile`

## Patients

* GET `/patients`
* POST `/patients`
* GET `/patients/{id}`
* PUT `/patients/{id}`
* GET `/patients/{id}/tasks`
* GET `/patients/{id}/history`

## Nurses

* GET `/nurses`
* GET `/nurses/{id}`
* GET `/nurses/{id}/patients`
* GET `/nurses/{id}/workload`

## Tasks

* GET `/tasks`
* POST `/tasks`
* GET `/tasks/{id}`
* PUT `/tasks/{id}`
* POST `/tasks/{id}/start`
* POST `/tasks/{id}/complete`
* POST `/tasks/{id}/delay`
* POST `/tasks/{id}/reassign`
* POST `/tasks/{id}/cancel`

## Assignments

* GET `/assignments`
* POST `/assignments`
* PUT `/assignments/{id}`
* DELETE `/assignments/{id}`

## Dashboard

* GET `/dashboard/nurse`
* GET `/dashboard/head-nurse`
* GET `/dashboard/patient`
* GET `/dashboard/admin`

## Handover

* GET `/handovers`
* POST `/handovers`
* POST `/handovers/{id}/submit`
* POST `/handovers/{id}/accept`

## Reports

* GET `/reports/tasks`
* GET `/reports/nurses`
* GET `/reports/patients`
* GET `/reports/units`

---

# 31. User Flow Utama

## Perawat Menyelesaikan Tugas

Login
→ Dashboard
→ Lihat Tugas Berikutnya
→ Buka Detail Tugas
→ Mulai Tindakan
→ Lakukan Perawatan
→ Selesaikan Tindakan
→ Isi Catatan
→ Simpan
→ Status Berubah Menjadi Selesai
→ Riwayat Diperbarui

## Kepala Perawat Membagi Pasien

Login
→ Dashboard Operasional
→ Buka Penugasan
→ Pilih Perawat
→ Pilih Pasien
→ Tentukan Shift
→ Periksa Beban Kerja
→ Simpan Penugasan
→ Perawat Mendapat Notifikasi

## Pasien Memanggil Perawat

Login
→ Beranda
→ Tekan Panggil Perawat
→ Konfirmasi
→ Permintaan Dikirim
→ Perawat Menerima
→ Pasien Melihat Status
→ Perawat Datang
→ Permintaan Diselesaikan

## Serah Terima Shift

Buka Serah Terima
→ Sistem Membuat Ringkasan
→ Tambahkan Catatan
→ Kirim ke Shift Berikutnya
→ Perawat Berikutnya Membaca
→ Konfirmasi Penerimaan
→ Serah Terima Selesai

---

# 32. Acceptance Criteria Utama

## Dashboard Perawat

* Sapaan berubah berdasarkan waktu.
* Jam real-time tampil.
* Tugas terdekat diurutkan berdasarkan waktu dan prioritas.
* Tugas terlambat terlihat jelas.
* Kartu statistik dapat diklik.
* Data hanya menampilkan pasien yang ditugaskan.

## Penyelesaian Tugas

* Tugas tidak dapat selesai tanpa konfirmasi.
* Waktu penyelesaian tersimpan.
* Catatan wajib untuk tugas terlambat.
* Status dashboard berubah tanpa memuat ulang halaman.
* Aktivitas tercatat dalam audit log.

## Multi-Pasien

* Satu perawat dapat menangani minimal lima pasien.
* Setiap pasien memiliki jadwal berbeda.
* Filter pasien bekerja.
* Perawat dapat berpindah detail pasien tanpa kehilangan konteks.
* Data setiap pasien tidak tercampur.

## Notifikasi

* Tugas mendatang menghasilkan pengingat.
* Tugas terlambat menghasilkan alert.
* Notifikasi tidak dikirim dua kali tanpa alasan.
* Notifikasi yang dibuka mengarah ke tugas terkait.

## Responsivitas

* Sidebar tetap terlihat pada desktop.
* Sidebar tidak tampil pada mobile.
* Bottom navigation tampil pada mobile.
* Semua form dapat digunakan pada layar kecil.
* Tidak terdapat horizontal scrolling pada halaman utama.

---

# 33. Metrik Keberhasilan

## Product Metrics

* Persentase tugas selesai.
* Persentase tugas tepat waktu.
* Jumlah tugas terlambat.
* Rata-rata waktu respons.
* Jumlah tugas tanpa penanggung jawab.
* Persentase serah terima selesai.
* Penggunaan aplikasi per shift.
* Jumlah pasien per perawat.

## UX Metrics

* Task completion rate.
* Time on task.
* Error rate.
* Number of assistance requests.
* System Usability Scale.
* User satisfaction.
* Learnability.
* Navigation success rate.

## Target Awal

* Minimal 90% tugas pengujian berhasil diselesaikan.
* Rata-rata skor SUS minimal 75.
* Pengguna menemukan tugas berikutnya kurang dari 10 detik.
* Pengguna menyelesaikan pencatatan tugas kurang dari satu menit.
* Tidak ada critical usability issue.
* Tidak ada informasi penting yang hanya dibedakan melalui warna.

---

# 34. Tahapan Pengembangan

## Tahap 1 — Prototype UI/UX

* Dashboard perawat.
* Dashboard pasien.
* Dashboard kepala perawat.
* Daftar pasien.
* Detail pasien.
* Daftar tugas.
* Detail tugas.
* Form penyelesaian.
* Riwayat.
* Responsive prototype.
* Usability testing.

## Tahap 2 — MVP

* Login.
* Database.
* Role.
* Multi-pasien.
* Penugasan.
* CRUD tugas.
* Status real-time.
* Riwayat.
* Notifikasi in-app.
* Dashboard.
* Responsive PWA.

## Tahap 3 — Operational Release

* Push notification.
* Serah terima shift.
* Laporan.
* Audit log.
* Offline mode.
* Sinkronisasi.
* Panggil perawat.
* Workload monitoring.

## Tahap 4 — Advanced

* Multi-unit.
* Multi-location.
* Integrasi perangkat.
* Integrasi sistem eksternal.
* Rule-based escalation.
* Predictive workload.
* Advanced analytics.

---

# 35. Prioritas MVP

## Must Have

* Login dan role.
* Dashboard perawat.
* Multi-pasien.
* Daftar tugas.
* Detail tugas.
* Status tugas.
* Penyelesaian tindakan.
* Catatan tindakan.
* Riwayat.
* Dashboard kepala perawat.
* Penugasan pasien.
* Responsive mobile.
* Database.

## Should Have

* Kalender.
* Push notification.
* Panggil perawat.
* Serah terima shift.
* Laporan sederhana.
* Beban kerja perawat.
* Offline caching.

## Could Have

* Lampiran foto.
* QR pasien.
* Export PDF.
* Grafik lanjutan.
* Theme customization.
* Multi-language.

## Won’t Have pada MVP

* Diagnosis.
* Billing.
* Farmasi.
* Telemedicine.
* Rekomendasi medis otomatis.
* Integrasi alat kesehatan.

---

# 36. Skenario Demo Produk

Perawat Rina login pada pukul 07.45.

Dashboard menampilkan:

* Good Morning, Perawat Rina.
* Lima pasien dipantau.
* Delapan belas tugas hari ini.
* Sembilan tugas selesai.
* Dua tugas memerlukan perhatian.
* Satu tugas terlambat.

Tugas berikutnya:

08.00 — Ibu Siti
Pemberian obat pagi
Kamar 201

Perawat membuka detail tugas dan menekan **Mulai Tindakan**.

Setelah tindakan selesai, perawat menekan **Selesaikan Tindakan**, menambahkan catatan, lalu menyimpan.

Sistem menampilkan:

**Tindakan berhasil diselesaikan. Terima kasih telah memperbarui kondisi pasien. 😊**

Status tugas berubah menjadi Selesai.

Dashboard otomatis memperbarui:

* Tugas selesai bertambah.
* Tugas berikutnya berubah.
* Riwayat Ibu Siti diperbarui.
* Kepala perawat dapat melihat tindakan selesai.
* Pasien melihat bahwa tindakan sudah dilakukan.

Pada dashboard kepala perawat, terdapat pasien lain yang memiliki tugas terlambat. Kepala perawat membuka tugas, melihat petugas yang bertanggung jawab, lalu mengalihkan tugas kepada perawat dengan beban kerja lebih rendah.

Semua perubahan tercatat dalam audit log.

---

# 37. Kesimpulan

CareTrack dirancang sebagai aplikasi manajemen tugas perawatan pasien yang menghubungkan perawat, pasien, kepala perawat, dan admin dalam satu sistem operasional.

Kekuatan utama CareTrack terletak pada:

* Dashboard yang informatif.
* Pemantauan multi-pasien.
* Pengelolaan tugas berbasis waktu.
* Status real-time.
* Notifikasi dan eskalasi.
* Riwayat yang tidak dapat dimanipulasi.
* Penugasan perawat.
* Serah terima shift.
* Dukungan mobile dan desktop.
* Pengalaman penggunaan yang ramah, profesional, dan mudah dipahami.

CareTrack bukan sekadar aplikasi pengingat. CareTrack berfungsi sebagai pusat koordinasi aktivitas perawatan untuk memastikan setiap pasien menerima tindakan yang tepat, dari petugas yang tepat, pada waktu yang tepat.
>>>>>>> dd918c850c46862e78a4c9f59c159acf69f76254
