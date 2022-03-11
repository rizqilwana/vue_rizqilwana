## Clean Code

## Resume
Dalam materi ini, terdapat:
3 Poin dari materi yang dipelajari

### 1. Clean Code
Clean code adalah istilah untuk kode yang mudah dibaca, difahami dan diubah oleh programmer.
#### Karakteristik Clean Code 
##### Mudah difahami
##### Mudah dieja dan dicari
##### Singkat namun mendeskripsikan konteks
##### Konsisten
##### Hindari penambahan konteks yang tidak perlu
##### Komentar
##### Good function
##### Gunakan onvensi
##### Formatting
- Lebar baris code 80-120 karakter 
- Satu class 300-500 baris
- Baris code yang berhubungan saling berdekatan
- Dekatkan fungsi dengan pemanggilnya
- Deklarasi variabel berdeketan dengan penggunanya
- Perhatikan indentasi
- Menggunakan prettier atau formatter

#### Clean Code Principle
##### KISS (Keep It So Simple)
Hindari membuat fungsi yang dibuat untuk melakukan A, sekaligus memodifukasi B, mengecek fungsi C, dst
- Fungsi atau class harus kecil
- Fingsi dibuat untuk melakukan satu tugas saja
- Jangan digunakan terlalu banyak argumen pada fungsi
- Harus diperhatikan untuk mencapai kondisi yang seimbang, kecil dan jumlahnya minimal
##### DRY (Don't Repeat Yourself)
Duplikasi code terjadi karena sering copy paste. Untuk menghindari duplikasi, coba buatlah fungsi yangdapat digunakan secara berulang-ulang.
- Refactoring adalahproses restrukturisasi kode yang dibuat, dengan cara mengubah struktur internal tanpa mengubah perilaku eksternal. 
- Prinsip KISS dan DRY bisa dicapai dengan cara refactor
##### Teknik Refactoring
- Membuatsebuah abstraksi
- Memecah code dengan fungsi/class
- Perbaiki pnamaan dan lokasi kode
- Dteksi kode dyang memiliki duplikasi
