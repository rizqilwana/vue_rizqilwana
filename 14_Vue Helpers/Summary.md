## Perkakas Pendukung Vue

## Resume
Dalam materi ini, terdapat:
3 Poin dari materi yang dipelajari


### 1. Navigasi Pada Vue
Navigasi adalah berpindah dari satu halaman ke halaman lain. Vue adalah Single Page Application yang berarti hanya ada satu entry halaman HTML saja namun konten dari halaman HTML tersebut dirender ulang (dengan bantuan Javascript) sehingga seolah-olah beeganti halaman.

#### Cara Vue Melakukan Navigasi
Untuk dapat berpindah ke halaman yang diinginkan, pertama yang perlu dipastikan adalah halaman tersebut ada. Contohnya dari halaman Home ke halaman About. <br>
Kemudian kita bisa membuka halaman About dengan mengetik manual di adress bar:/about.
#### Navigasi Beranak
Yaitu sub-path yang ada. <br>
/user/setting/privacy
- user: induk dari setting
- setting: anak dari user
- privacy: anak dari setting
#### Navigasi Dinamis
Adalah di mana path tersebut memiliki nilai sembarang dan kita tidak perlu mendefinisikan nilainya satu-persatu. <br>
/user/123463739220
- user: navigasi statis path didefinisikan manual sebagai user
- 12346373220: navigasi dinamis path tidak didefinisikan sesuai nilainya, namun sesuai parameter /user/:id

### 2. Layout Template Vue
Layout adalah susunan tata letak, sedangkan layout template pada Vue adalah komponen yang dapat dipakai sebagai susunan tata letak dasar yang membungkus masing-masing halaman.
- layout: memuat susunan tata letak yang sama untuk setiap halaman sepeeti halnya navbar atau footer.
- halaman: memuat komponen yang berubah sesuai konten halaman, namun tidak perlu lagi menyertakan navbar di setiap komponen view halaman. <br>
Layout juga dapat diterapkan untuk mengisolasi logika tampilan viewport supaya kode di setiap halaman tetap bersih dan efisien.
#### Cara Kerja Layout Template
Pada dasarnya layout hanyalah komponen biasa, yang membedakan adalah layoit dapat meneruskan konten dari anak komponennya.
#### Direktori Layout
Umumnya layout memiliki direktori terpisah sejajar dengan direktori router atau sejajar dengan direktori view.

### 3. Penyimpanan Global
Adalah sebuah metode untuk menyimpan variabel yang dapat diakses dengan mudah di seluruh bagian aplikasi.
- state komponen: hanya tersimpan dan valid pada satu komponen saja
- props: hanya tersimpan dan valid di induk atau anak komponen saja 
- store: tersimpanbdan valid di bagian manapun dari aplikasi
#### Penyimpanan Global dengan Vuex
Vuex adalah pola manajemen penyimpanan atau store yang berbentuk pustaka untuk aplikasi Vue.js
#### Cara Kerja Vuex
Penyimpanan untuk semua komponen dalam aplikasi, dengan aturan yang memastikan bahwa variabel yang tersimpan hanya dapat dimutasi dengan cara yang terstruktur dan terprediksi. Untuk membuat store dengan Vuex dapat menggunakan sintaks dan sisipkan store ke dalam inisiai Vue yang ada di main.js
#### Direktori Vuex Store
Umumnya Vuex store memiliki direktori sendiri bernama store yang sejajar dengan direktori main. <br>
Selain index.js biasanya di dalam direktori store juga tersimpan modul-modul store untuk pengelompokan state supaya lebih rapi dan terstruktur.

#### Vuex Mutation
Untuk memodifikasi nilai dari state yang tersimpan di dalam store yang menggunakan sintaks mutation. Kemudian dari komponen dapat memanggil fungsi mutations yang telah dibuat. <br>
store.commit("set angka,"this.newInputValue);
- commit: key untuk melakukan mutation
- setAngka: nama mutation
- this.newInputValue: payload/mutation
#### *note
Berdasarkan praktek terbaik penggunaan mutations, hanya bertujuan untuk mengibah nilai variabel yang ada di dalam store tanpa ada logika pengolahan muaran di dalam fungsi mutation tersebut. Jadi komponen Vue disarankan untuk terhubung ke Actions, sedangkan Actions akan beehubungan langsung dengan Mutations.

#### Vuex Actions
Beetugas sebagai pintu masuk perintah yang menghubungkan komponen dengan store. Action perlu memanggil fungsi di Mutations untuk memodifikasi nilai state yang ada di store. Selain itu, Actions juga tempat untuk melakukan komunikasi dengan API. <br>
store.dispact("changeAngkaValue",this.newInputValue
- store.dispact: key untuk melakukan action
- "changeAngkaValue": nama action
- this.newInputValue: payload/mutation
#### Memecah Store Sebagai Modul
Salah satu praktik terbaik dalam penggunaan Vuex Store adalah dengan cara memisah atau mengisolasi state mutations dan actions ke dalam modul- modul terpisah.

### 4. Penyimpanan Global Permanen
Nilai dalam Vuex store akan dihapus atau disetel ulang sesuai dengan nilai awal jika halaman dimuat ulang. <br>
Pada kasus pemakaian tertentu lita perlu mempermanenkan state yang ada di store supaya tidak hilang jika halaman dimuat ulang, konsep ini disebut dengan Penyimpanan Global Permanen.

#### Penyimpanan Permanen dengan Vuex Persistedstate
Vuex Persistedstate dapat mempertahankan dan rehidrasi Viex state kita diantara pemutaran ulang halaman, dengan menyimpannya di localstorage atau bahkan di dalam cookies.