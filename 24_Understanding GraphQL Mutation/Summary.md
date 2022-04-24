## Introduction Algorithm
### GraphQL Overview
GraphQL adalah bahasa kueri untuk API Anda, dan runtime sisi server untuk mengeksekusi kueri dengan menggunakan sistem tipe yang Anda tetapkan untuk data Anda.  GraphQL meminimalkan jumlah dota yang perlu ditransfer melalui jaringan.  Dengan graphQL kami dapat menggunakan satu titik akhir tunggal (/ graphQL) untuk setiap permintaan yang diperlukan.
<br>
Sebelum kita dapat melakukan GraphQL maka kita perlu mengatur GraphQL Server (Backend), Anda dapat menggunakan Hasura, Apollo Server atau lainnya untuk melakukan itu. Kemudian kita dapat menggunakan GraphQL pada klien baik menggunakan Prisma, Apollo Client, Postman, dll.
<br>
Ada 3 fitur utama dalam klien GraphQL:
Kueri, dapatkan data berdasarkan kueri tertentu yang kami tentukan
Mutasi, sisipkan, perbarui, hapus data
Berlangganan, dapatkan tanggal yang diperbarui secara realtime / berdasarkan peristiwa.
<br>
Dengan graphQL kita bisa mendapatkan data persis apa yang kita butuhkan. Kami menentukan bidang apa yang ingin kami dapatkan dan graphQL akan memberi kami data berdasarkan apa yang kami definisikan. Misalnya, bayangkan ada satu koleksi dalam database yang menyimpan data film. Semua data yang tidak perlu seperti direktur, created_at dan updated_at tidak akan disertakan dalam hasilnya.
<br>
Kita juga dapat menggunakan kueri untuk mendapatkan data dari beberapa koleksi terkait. Pada contoh di bawah ini, jika kita ingin mendapatkan data direktur, kita perlu menggunakan director.id untuk mendapatkan data dari titik akhir lain, tetapi dengan graphql kita juga dapat menentukan bidang yang diperlukan secara langsung selama tersedia di server GraphQL.
<br>
Kita juga dapat menggunakan kueri untuk mendapatkan data dari beberapa koleksi yang tidak terkait untuk meminimalkan permintaan jaringan. Gambar jika kita ingin data film dan data buku. Dengan REST kita perlu melakukan setidaknya 2 permintaan ke 2 titik akhir yang berbeda. Dengan GraphQL kita dapat melakukan 1 permintaan untuk mendapatkan data tersebut.
<br>
Fragmen GraphQL adalah bagian dari logika yang dapat dibagi antara beberapa kueri dan mutasi. Kita dapat menggunakan fragmen untuk menyederhanakan kueri atau mutasi

#### Mutation
Mutasi pada dasarnya adalah fungsi untuk memperbarui, menyisipkan, dan menghapus data. Kita perlu menentukan operasi apa yang ingin kita lakukan (berdasarkan operasi yang tersedia pada server graphql Anda) dan kemudian menentukan data apa yang perlu dikembalikan GraphQL.

#### Subscription
Subscription (langganan) adalah fitur GraphQL yang memungkinkan server mengirim data ke kliennya saat peristiwa tertentu terjadi. Langganan biasanya diimplementasikan dengan WebSockets. Dalam pengaturan itu, server mempertahankan koneksi yang stabil ke klien langganannya.
Ketika data diubah maka klien akan mendapatkan data yang diperbarui secara langsung secara real-time. Pada contoh di bawah ini, jika kita melakukan berlangganan pada pengumpulan orang maka setiap kali orang baru ditambahkan atau ketika data dihapus atau diubah maka kita akan mendapatkan data yang diperbarui secara real-time langsung ke klien kami. Berlangganan hanya akan terjadi di sisi klien bukan sisi server.

### Harusa dan Heroku
Hasura adalah layanan yang menyediakan graphql dan rest api. Dikelola penuh di hasura cloud atau self-hosted.
Heroku adalah platform cloud sebagai layanan yang mendukung beberapa bahasa pemrograman. Heroku juga menyedi
#### Setting Harusa dan Heroku
- Setelah selesai register hasura dan heroku, buka hasuran dan buat project baru. Setelah selesai meluncurkan konsol dan mengatur server basis data. Klik tab data dan buat database heroku. Setelah selesai membuat database, Anda dapat mengonfigurasi database Anda.
- Buka tab API, gunakan endpoint dan header x-hasura-admin-secret sebagai header
- Untuk mengubah API publik hasura, buka https://cloud.hasura.io/projects dan buka konfigurasi
- Buka Env vars, klik HASURA_GRAPHQL_ADMIN_SECRET lalu klik ikon hapus, buka konsol lalu graphql Anda publik sekarang
- Buka tab API, tulis kueri Anda atau cukup klik di explorer lalu klik eksekusi. Buat kueri mutasi untuk memasukkan data baru atau memperbarui data

### Apollo Setup
Apollo Client adalah perpustakaan manajemen status komprehensif untuk JavaScript yang memungkinkan kami mengelola data lokal dan jarak jauh dengan GraphQL. Gunakan untuk mengambil, menyimpan, dan memodifikasi data aplikasi, sambil memperbarui UI secara otomatis. Pustaka inti @apollo/client menyediakan integrasi bawaan dengan React. Kami menggunakan klien Apollo untuk melakukan operasi GraphQL (kueri, mutasi, dan berlangganan) di dalam aplikasi React atau Next JS kami. Klien Apollo bekerja dengan baik dengan server GraphQL (Hasura, Apollo Server, dll)
#### Apollo Install
- Buat proyek Vue baru
npm install --save vue-apollo graphql apollo-boost
- Jangan lupa untuk melakukan perubahan untuk melacak kemajuan
#### Apollo Client Vue Setup
- 1. Set up on main.js file 
- 2. Create apolloClient
- 3. uri menentukan URL server GraphQL kami
- (cache adalah turunan dari InMemoryCache, yang digunakan Apollo)
- (Client untuk menyimpan hasil kueri setelah mengambilnya)
- 4. Setting penyedia apollo, di main.js import ApolloProvider
- (ApolloProvider membungkus aplikasi React Anda dan menempatkan Apollo Client pada konteksnya, yang memungkinkan Anda mengaksesnya dari mana saja di pohon komponen Anda)

### Query
Anda dapat menggunakan komponen ApolloQuery (atau apollo-query) untuk melihat kueri Apollo langsung di template Anda. Setelah membaca halaman ini, lihat Referensi API untuk semua opsi yang memungkinkan.
<br>
Kami meneruskan fungsi ke prop kueri yang mendapatkan tag gql sebagai argumen, sehingga kami dapat menulis dokumen GraphQL secara langsung.
<br>
Contoh di atas juga menampilkan variabel yang diteruskan ke kueri menggunakan prop dengan nama yang sama.
<br>
Di dalam slot default ApolloQuery, Anda dapat mengakses berbagai data slot tentang kueri yang ditonton.
<br>
Kami meneruskan fungsi ke prop kueri yang mendapatkan tag gql sebagai argumen, sehingga kami dapat menulis dokumen GraphQL secara langsung.
<br>
Contoh di atas juga menampilkan variabel yang diteruskan ke kueri menggunakan prop dengan nama yang sama.
<br>
Di dalam slot default ApolloQuery, Anda dapat mengakses berbagai data slot tentang kueri yang ditonton.

### Mutation
- Anda dapat menggunakan komponen ApolloMutation (atau apollo-mutation) untuk memanggil mutasi Apollo langsung di template Anda.
- Anda perlu memberi tahu Apollo Client cara memperbarui cache dengan hasil mutasi. Misalnya, jika mutasi menambahkan item baru, Anda harus memperbarui hasil kueri yang relevan untuk secara efektif mendorong item baru ini ke kueri.
### Subscription
- Untuk mengaktifkan langganan berbasis websocket, diperlukan sedikit pengaturan tambahan:
npm install --save apollo-link-ws apollo-utilities
- Impor semua modul yang diperlukan dan pisahkan antara http dan tautan websocket
- You can subscribe to more data with the ApolloSubscribeToMore (or apollo-subscribe-to-more) component. You can put as many of those as you want inside a <--ApolloQuery--> component.






