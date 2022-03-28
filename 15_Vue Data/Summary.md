## Vue Data

### 1. Data Fetching
Pengambilan data oleh program perangkat lunak atau skrip. Setelah diambil, data dipindahkan ke lokasi alternatif atau ditampilkan di layar.
#### Cara Kerja Fetch API
API (Application Programming Interface) yaitu sebuah protokol pada dasarnya menyediakan bahasa dan kontrak untuk bagaimana dua sistem berinteraksi.
#### API Endpoint
Saat API berinteraksi dengan sistem lain, titik kontak dari komunikasi ini dianggap sebagai Endpoint, yang berbentuk link.
#### Fetch Data dengan Axios
Axios adalah sebuah pustaka yang dipakai front-end untuk melakukan HTTP Request kepada link API Endpoint. 
#### Request Queries
Syarat yang menyatakan data seperti apa yang ingin diambil. <br>
https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
- https://pokeapi.co : host endpoint
- /api/v2/pokemon? :nama/path endpoint
- limit=20&offset=0 : string query
#### Pagination dengan Quaries
Salah satu contoh penggunaan string quary pada endpoint adalah untuk pembagian/manajemen halaman. <br>
https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
- https://pokeapi.co/api/v2/pokemon?:*limit*(batasan maksimal jumlah data yang diambil)

- limit=20&offset=0: *offset*: index untuk memulai pengambilan data

### 2. Penanganan Data Error
Konsep untuk mencegah terjadinya runtime-error.
#### Try catch finally
Metode penanganan error bawaan dari JavaScript.
#### Promise
Aktivitas berkomunikasi dengan API. <br>
fungsiPromise().then(res=>{}).catch(err=>{});
- fungsiPromise():nama fungsi
- .then(res=>{}): handler jika fungsi sukses
- .catch(err=>{});: handler jika fungsi gagal.

### 3. Validasi Data
Konsep untuk melakukan pengecekan terhadap data apakah sudah sesuai dengan kriteria atau belum, terutama pada input pengguna.
#### Cara Kerja
Fungsi validasi menerima nilai yang ingin dicek kemudian mengembalikan nilai keabsahan/validaty berup nilai boolean (true/false).
#### Validasi Manual
Bisa menggunakan fungsi dengan if/switch
#### Validasi dengan Regex (Regular Expression)
Regex merupakan text (string) yang mendefinisikan sebuah pola pencarian sehingga dapat membantu kita untuk melakukan matching (pencocokan) dan locate (pencarian).




### 4. Autentikasi
Suatu proses yang menjadi tindakan atau pembuktian (validasi) terhadap identitas pengguna ketika ingin memasuki dan mengakses sistem tertentu.
#### Cara Kerja Autentikasi
Pengguna A mengirimkan kredensial yang biasanya berupa kombinasi username dan password, jika cocok maka server akan mengirim akses token di mana token tersebut adalah pembuktian mutlak kalau pengguna A adalah pengguna A bukan pengguna B, C atau yang lain.
#### Otorisasi
- Authentication: mengonformasi pengguna sesuai dengan siapa yang ia claim
- Authorization: mengatur perizinan terhadap tindakan yang dapat dilakukan pengguna

