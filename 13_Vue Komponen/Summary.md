## Komponen Vue

## Resume
Dalam materi ini, terdapat:
3 Poin dari materi yang dipelajari

### 1. Module Export & Import
#### Javascript Module
Berisi kelas atau pustaka untuk tujuan tertentu. Module hanya sebuah file. Satu kode script adalah satu modul. Modul bisa memuat satu sama lain dan menggunakan pengarah khusus export dan import untuk fungsi pertukaran, memanggil fungsi dari satu mdul ke modul lainnya.
- CJS: import semua isi 
- ESM: inmport yang dibutuhkan saja
#### Export
Digunakan untuk menyediakan fungsi, objek, atau nilai primitif dari modul sehingga dapat digunakan oleh modul lain dengan pernyataan import.
- named export: ekspor nol atau lebih satu per modul
- Default export: satu per modul
#### Import
Digunakan untuk mengambil variabel, objek, atau fungsi yang disediakan oleh modul lain
- Importing defaults: import target
- Import multiple exports: import {target}
- Rename multiple exports: import {target as t}
- Import defaults+multiple: import target Default{target as t}

### 2. Komponen dapat digunakan kembali
Sebuah komponen file tunggal Vue yang bertujuan untuk dapat digunkan lebuh dari satu kali di tempat yang berbeda.
#### Direktori komponen 
- Halaman dapat menggunakan komponen namun komponen tidak dapat menggunakan halaman
- Komponen dapat menggunakan komponen lain
- Di dalam direktori components tidak menutup kemungkinan untuk dibuat sub direktori
#### Komunikasi anak komponen
Untuk mengekspos data dari induk ke anak dapat dilakukan dengan
- props=> variabel
- emits=> fungsi/event

### 3. Paradigma Fungsi Pembantu
Sebuah fungsi perkakas/pembantu yang bertujuan untuk dapat digunakan lebih dari satu kali di tempat yang berbeda. Pada umumnya fungsi pembantu dijadikan satu pada direktori yang sejajar dengan komponen atau halaman
#### Tips
Fungsi pembantu bisa diberi nama yang berbeda-beda namun harus mudah dimengerti, jamak dan self-descripting seperti:
- utilities
- utils 
- helpers
- tools
<br>
Beberapa contoh fungsi pembantu yang sering dipakai:
- operator: penambahan, rata-rata, median, min-max, hitung mundur, dll
- formatter: tanggal, waktu, mata uang, dl
- validator: email, no telp, nomor kartu kredit
- generator: angka random, text random, warna, formate text, etc

### 4. Instance Lifecycle Hooks
Setiap vue instance melewati beberapa serangkaian tahapan pada saat dibuat, tahapan ini disebut sebagai Lifecycle atau siklus hidup.
#### Cara kerja Lifecycle di Vue
Siklus hidup sebuah Vue Instance berawal ketika inisiasi dan berakhir ketika penghancuran. Setiap siklus memiliki hook-nya masing-masing yang berbentuk fungsi.
- beefore create
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- activated
- deactivated
- befpreDestroy
- destroyed
- errorCaptured
#### 3 Lifecycle Utama
- Created: berlangsung setelah instance tebentuk dan sebelum DOM dirender. <br>
Contoh penggunaan: menambah SEO Meta, menambah event listener scroll
- Mounted: Berlangsung setelah DOM dirender<br>
Contoh penggunaan: handing looder
- Destroyed: berlangsung sebelum instance dihancurkan<br>
contoh penggunaan: mencopot event listener






