## Vue CLI

## Resume
Dalam materi ini, terdapat:
3 Poin dari materi yang dipelajari

### 1. Vue CLI
Vue CLI adalah perkakas standar untuk memudahkan penyetelan/pembuatan aplikasi Vue baru
#### Webpack
Webpack adalah sebuah module bundler, digunakan untuk menggabungkan seluruh modul project aplikasi berupa file Javascript, HTML, CSS, gambar dan lain-lain menjadi satu file(line yang sama)
- Pasang Vue CLI 
- Inisiasi aplikasi
- Jalankan aplikasi
- Perkakas penting: ESLin, Prettier, Vetur, Gitlens

#### Highligter/Penyorot
Penyorot sintaks adalah perkakas untuk memberikan warna pada kodingan kita sesuai dengan setelan/peraturan dari ekstensi berkas yang digunakan

#### Linter
Linter adalah alat yang memindai kode secara terprogram dengan tujuan menemukan masalah yang dapat menyebabkan bug atau ketidakkonsistenan dengan standar yang berlaku

#### Code Formatter
Code formatter adalah perkakas untuk membantu menyeragamkan gaya kode yang kita tulis, dapat mengubah secara otomatis gaya kode yang kita tulis sesuai dengan pengaturan yang berlaku ketika kita menyimpan file

#### Git Inspector
Git inspector adalah perkakas yang dapat mengetahui versi atau commit yang ada untuk setiap baris kode. Perkakas ini sangat membantu ketika berkolaborasi dengan rekan lain

### 2. Komponen File Tunggal
Komponen file tunggal memungkinkan kita membangun seluruh komponen (struktur, gaya, dan fungsi) dalam satu file. Sebagian besar editor kode menyediakan penyorotan sintaks dan linting.
Terdapat 3 tag utama pada komponen file tunggal:
- template
- script
- style
#### Script
- Memuat sintaks Javascript
- Juga dapat menerima atribut lang yang biasanya untuk penggunaan Typescript
#### Style
- Memuat sintaks CSS
- Juga dapat menerima atribut lang yang biasanya untuk penggunaan CSS preprosesor seperti Stylus, SCSS
### 3. Vue Struktur Folder
- Defalut/Bawaan
- Lanjutan: seiring berkembangnya aplikasi dan bertambah kompleksnya aplikasi
- Assets: di direktori ini kita akan menyimpan semua file asset
- Components: di direktori ini, kita akan menyimpan semua komponen file tunggal Vue
- Router: di direktori ini, kita akan menyimpan semua  file yang terkait dengan vue-router. Vue-router adalah library untuk mengatur routing alamat aplikasi Vue.
- Store: direktori penyimpanan Vuex tempat kita dapat menyimpan semua file terkait vuex.
Vuex adalah library untuk mengatur penyimpanan state berbasis glibal pada aplikasi Vue
- View: isinya mirip seperti direktori components, yaitu komponen file tunggal namun yang membedakan adalah pada direktori ini digunakan sebagai halaman, di mana file di dalam direktori ini berhubungan langsung dengan router. Sedangkan file di direktori components berhubungan dengan file di direktori view atau sesama file di folder components
- Test: Direktori tests berada di luar direktori scr. karena direktori ni tidak berhubungan langsung dengan file yang dibutuhkan untuk proses pengembangan. Berisi berkas untuk melakukan unit testing komponen atau fungsi yang ada di dalam direktori scr.





















