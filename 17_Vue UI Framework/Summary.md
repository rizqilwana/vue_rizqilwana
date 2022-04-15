## Vue UI Framework

### Pengenalan Rangka Kerja UI
UI Framework adalah elemen visual (seperti tombol,ikon, dll) dan fungsionalitas yang bisa dipakai secara instan. UI Framework membantu kita untuk membuat aplikasi web dengan tampilan yang baik dan terlihat profesional.
#### Cara Kerja Rangka UI
Rangka kerja menyediakan komponen siap pakai kemudian kita impor komponen yang kita butuhkan ke daam aplikasi.

### Vuetify
Vuatify adalah library yang memungkinkan kita membuat aplikasi dengan tampilan yang indah walaupun kita bukanlah seorang desainer. Vuetify memiliki lebih dari 80 komponen berbasis material design yang mana komponen tersebut dapat membantu kita leih cepat dalam pengembangan aplikasi. 
#### Cara Kerja Vuetify
- Vuetifi telah menyiapkan komponen siap pakai yang bisa kita gunakan di aplikasi kita.
- Untuk mengetahui daftar lengkap props yang tersedia di masing-masing komponen dapat melalui tautan yang tersedia di masing-masing komponen dapat melalui tautan yang terdapat di bagian API halaman komponen
- Pasang Vuetify sebagai dependency
- Daftarkan Vuetify ke dalam berkas entry main.js
- Vuetify harus dibungkus dengan v-app untuk dapat berfungsi dengan baik
- tambahkan font ke dalam public/index.html
- Komponen vuetify siap digunakan di mana saja tanpa perlu impor


### Manajemen Warna Tema
Pengaturan set warna yang dapat kita terapkan terhadap tampilan di apikasi
#### Cara Kerja
Vuetify menyimpan warna tema bawaan yang bisa kita setel secara manual ketika aplikasi berjalan.
- Komponen Vuetify menggunakan warna primary sebagai warna dominannya
- Buat fungsi untuk mengganti tema warna vuetify kemudian tambahkan menu pilihan warna

### Gelap Terang
Tema gelap terang adalah fitur peralihan warna latar belakang aplikasi dari terang ke gelap atau sebaliknya.
#### Cara Kerja
- Vuetify memiliki variabel boolean dark dan juga menyimpan warna tema bawaan mode gelap
- Buat fungsi untuk mengganti tema warna Vuentify kemudian tambahkan menu pilihan warna

### Reaktivitas dengan Kerangka Kerja UI
Perubahan ukuran yang menyesuaikan dengan lebar layar tampilan
#### Cara kerja
- Lebar layar dibagi menjadi beberapa golongan dan setiap komponen dapat ditentukan ukurannya berdasarkan golongan tersebut
- Gunakan halaman pokemon untuk demo

### Extra
#### Tabel
Mempunyai fitur tambahan untuk pagination, filter dan start
#### Validasi Input
Komponen input memiliki props untuk validasi yang cukup canggih, menerima array of function
#### Skeleton Loader
Membuat loading seperti aplikasi bintang lima bukanlah sekedar mimpi lagi
#### Dialog
Membuat pop-up dialog tidak lagi menjadi mimpi buruk berkat bantuan rangka kerja UI






