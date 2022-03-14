## Frontend Fundamental

## Resume
Dalam materi ini, terdapat:
3 Poin dari materi yang dipelajari

### 1. HTML (Hypertext Markup Language)
Bahasa markup standar untuk membuat dan menyusun halaman dan aplikasi web
#### Cara Kerja HTML
<p>File HTML diakhiri dengan ekstensi .html atau .htm</p>
Ekstensi file ini bisa dirender dengan menggunakan web browser apapun.

#### HTML Tag/elements
HTML memiliki tag pembuka dan penutup yang menggunakan syntax< tag>/< tag>
sisanya memilikin syntax penutup sendiri < input/> dan juga komentar < !---komentar--->
Tag HTML memiliki dua tipe utama:
- bock-level: < html >, < head >, < body >
- inline tags

### 2. CSS (Cascading Style Sheets)
CSS dipakai untuk mendesain halaman depan atau tampilan website. CSS membuat style di dalam halaman web yang dapat berinteraksi dengan elemen HTML
#### Macam CSS di dalam HTML
- Inline CSS
- Internal CSS
- External CSS
#### Media Queries
Media Query merupakan modul CSS yang berguna membuat layout kita responsive dengan menyesuaikan tampilan berdasarkan urutan layar perangkat.

### 3. Javascript
Script yang membuat halaman web menjadi hidup yang memungkinkan adanya interaksi dengan pengguna. Javascript dapat berjalan pada browser dan juga server atau di perangkat manapun yang memiliki program khusus JavaScript engine.
#### Cara kerja JavaScript
Bisa langsung menambahkan Javascript pada HTML dengan menggunakan tag < script>< /script>
#### Pengetahuan Dasar
-Variabel: wadah untuk menyimpan atau mengingat 
- Operasi Matematika: memungkinkan kita untuk melakukan penambahan, pengurangan, perkalian dll terhadap variabel dan angka
- Fungsi: wadah untuk menyimpan logika atau algoritma yang dapat digunakan lagi dengan praktis
- Kelas: sebuah fungsi khusus yang bisa dipakai sebagai template untuk membuat obyek dengan mudah
- Pengulangan : untuk melakukan pengulangan sesuai syarat kondisi yang ditentukan

### Node.js
Runtime environment untuk JavaScript.
Dengan Node.js kita dapat menjalankan kode JavaScript di mana pun, tidak hanya terbatas pada lingkungan browser.
#### Cara kerja Node.js
Nod.js akan melakukan eksekusi atau menjalankan file yang memiliki ekstensi js. 

### NPM 
Singkatan dari Node Package Manager, tool ini merupakan command line yang dapat menginstal dan meng-uninstal package mengelola versi dan dependensi yang diperlukan untuk menjalankan proyek. NPM akan terpasang otomatis saat kita menginstall Node.js

#### Cara kerja NPM 
Bekerja untuk mengatur package pada proyek yang berjalan dengan node.js. Package pada nodejs memuat semua file yang dibutuhkan sebagai module. Module adalah library JavaScript yang dapat kita masukkan ke dalam proyek

#### Struktur Proyek NPM
Key yang penting untuk diingat:
- name: nama proyek
- sripts: daftar perintah yang bisa kita jalankan di dalam proyek
- dependencies: daftar library yang dipakai di proyek ketika production
- devDependencies: daftar library yang dipakai di proyek ketika tahap pengembangan

#### Memasang Dependensi
node_modules memiliki ukuran yang relatif besar, jadi ketika kita akan memberikan proyek ke penyimpanan atau rekan maka node_modules umumnya dihabpus.
Untuk mendapat node_modules kembali berdasarkan informasi dari dependencies dan devDependencies di package jsan hanya perlu menjalankan npm install

### Git
Git adalah salah satu sistem pengontrol versi pada proyek perangkat lunak yang bertugas mencatat setiap perubahan pada film proyek yang dikerjakan oleh banyak orang maupun sendiri
##### Cara Kerja Git
Git memantau semua perubahan yang terjadi pada file proyek. 
##### Kata kunci penting pada Git
- Modified: File yang telah kita rubah, perubahan tercatat dapat kita bandingkan dengan versi commit sebelumnya 
- Staged: Fie yang telah kita modified dan telah kita add. File ini yang akan menjadi commit kita selanjutnya
- Commit: Mengambil berkas-berkas yang ada pada staging area dan menyimpan snapshot tersebut secara tetap ke dalam direktori Git
- Branch: Cerminan direktori Git









