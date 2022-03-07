## Javascript Refreshment

## Resume
Dalam materi ini, terdapat:
3 Poin dari materi yang dipelajari

### 1. JavaScript
Javascript adalah bahasa pemrograman high-level, scripting, untyped dan interpreted. Javascript dibuat untuk berinteraksi dengan halaman web, apapun itu webrowsernya. 

#### Var 
##### Declaration: proses pembuatan variabel untuk menyimpan data
- Var
- Let: saat membutuhkan nilai yang dapat diubah
- Const: saat membutuhkan nilai yang tidak dapat di-reassign
- Redeclaration: Var bisa, Let dan Const tidak
- Reassignment: memberikan nilai baru pada variabel, const tidak bisa

##### Scoping
Menentukan dimana variabel, fungsi, dan objek diatur dan dapat diakses dalam kode kita. Ruang ingkup variabel dikendalikan oleh lokasi deklarasi variabel.
- Global: Saat kita mendeklarasikan variabel, variabel tersebut dapat diakses untuk setiap kondisi
- Function/local: Mendeklarasikan variabel di dalam function, tidak dapat diakses diluar function
- Blok: 
tanda kurung kurawa

##### Hoisting
Membuat beberapa jenis variabel atau fungsi yang dapat diakses/digunakan dalam kode sebelum dideklarasikan
- Deklarasi Var dan function adalah hoisted, oleh karena itu mereka dapat digunakan bahkan sebelum deklarasi itu sendiri terjadi
- Sedangkan Let dan const tidak hoisted, oleh karena itu mereka tidak dapat digunakan bahkan sebelum deklarasi terjadi

### 2. Values & References
Javascript memiliki 2 kategori tipe data
- Primitives: meneruskan nilai
- Object: juga disebut sebagai collection atau reference type
#### Primitive
Dalam bahasa pemrograman adalah unit pemrosesan terkecil dan elemen paling sederhana yang tersedia dalam bahasa pemrograman
- string
- boolean
- number
- biglnt (ES11)
- Undefined
- Null
- Symbol (ES6)
#### Object
- object
- array
- function
- date
- set
- map
- weak set
- weak map
##### *Rules
- Aturan sederhana untuk meneruskan value adalah bahwa semua nilai primitif dalam JS diteruskan oleh value
- Meneruskan references bagaimanapun, akan memberikan references yang sama

### 3. Destructuring, Method, Control Flow, Function, Class, Async Wait
#### Destructuring
Ekspresi dari JS yang memungkinkan untuk menyalin nilai dari array, atau properti dari object ke dalam variabel yang berbeda
- Array: seperti assignment, maka kita harus mendeklarasikan variabel tersebut terlebih dahulu. Menggunakan const ketika data tersebut kosong atau undefined, tidak akan terjadi error.
- Object: kita dapat menyalin nilai properti object ke dalam suatu variabel
#### Method
Sebuah fungsi yang terkait dengan object, membuat programnya sesederhana mungkin sesuai kegunaan masing-masing.
- concat: menggabungkan dua atau lebih array, dan mengembalikan salinan array yang digabungkan
- map: membuat array baru dengan hasil memanggil fungsi untuk setiap elemen array
- foreach: memanggil fungsi untuk setiap elemen array
- slice: memilih bagian dari array baru
- filter: membuat array baru dengan setiap elemen dalam array yang lulus seleksi
- reduce: melakukan operasi pada setiap elemen array menjadi nilai tunggal( dari kiri ke kanan)

#### Control Flow
##### Normal flow
Mengeksekusi statement dari atas ke bawah atau kiri ke kanan yang dilakukan secara berurutan
##### Control Flow
Mengatur alur eksekusi pada statement atau jalannya program sesuai keinginan kita
###### Pengulangan (Loop/Literasi): For, while, do while
###### Pengondisian (Percabangan): 
- if.. else, 
- switch, 
- block, 
- try..catch: try bertugas mengeksekusi statement di dalamnya, catch bertugas menangkap error yang terjadi pada statement di dalam try, 
- break, 
- continue, 
- throw: terjadi di dalam block try, bertugas melemparkan error sesuai kondisi yang diinginkan, error itu akan ditangkap oleh catch

#### Function
Digunakan untuk melakukan serangkaian komputasi/prosedur yang dapat digunakan berulang kali
##### Deklarasi fungsi
- nama
- parameter
- area/scope
- memanggil fungsi
##### Function Expression
Membuat variabel pada fungsi
##### Arrow Function 
Penulisan function ditiadakan

#### Class
- Class: prototype dari suatu object yang akan kita buat
- Constructor: method di dalam class yang akan selalu terpanggil pertama kali ketika membuat object
- Method: fungsi yang berada di dalam class
- Attributes:kumpulan variabel yang membentuk object yang dimiliki oleh suatu class
- Extend: digunakan untuk membuat kelas anak dari kelas induk. Kelas anak mewarisi semua atribut dan metode dari kelas induk

#### Async Wait
- Synchronous mengeksekusi setiap peritan satu persatu sesuai urutan kode yang dituliskan. Output dari code sesuai dengan urutan, karena setiap perintah harus menunggu perintah sebelumnya selesai
- Asynchronous hasil eksekusi atau output tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses. SetTimeout digunakan untuk menunda eksekusi, karena ada salah satu eksekusi membutuhkan proses yang agak lama, sembari menunggu proses tersebut javascript mengeksekusi perintah selanjutnya.
- Callback adalah fungsi yang dikirimkan sebagai parameter pada fungsi lain atau callback adalah fungsi yang dieksekusi setelah fungsi lain selesai dijalankan
- Promise adalah object yang merepresentasikan keberhasilan atau kegagalan pada sebuah event yang asynchronous di masa mendatang
- Asynchronous Callback: resolve, reject, finally

#### Document Object Model
Document Object Model adalah API untuk HTML yang merepresentasikan halaman web pada suatu dokumen menjadi sebuah object
- DOM Selection Method
- Manipulation
- Event: Event Handler, addEventListener





## Task
#### Bootstrap
- Membuat file dengan desain yang sudah ditentukan
- Resume
 
