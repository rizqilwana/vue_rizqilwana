## Vue Fundamental

## Resume
Dalam materi ini, terdapat:
3 Poin dari materi yang dipelajari

### 1. Vue
Vue adalah framework dariJavaScript untuk mengambangkan tampilan website yang lebih interaktif dan dinamis.
#### Kelebihan
- mudah membuat aplikasi frontend dan website
- mudah dipelajari dan menyenangkan
- dokumentasi yang lengkap dan rapi
- ramping dan cepat
#### Cara Kerja Vue
- Vue CDN: dapat digunakan langsung di HTML dengan menambahkan < script >
- Vue CLI: menggunakan perkakas standar dan ekosistem Vue untuk memudahkan setup/pembuatan aplikasi Vue

#### Vue Setup dan Resources
##### Tools
- Text editor
- Browser
- File HTML

### 2. Dasar-dasar Vue
#### Vue Instance
Setiap aplikasi Vue dimulai dengan membuat instance vue baru dengan func
#### Vue data banding
Vue JS menggunakan sintaks template berbasis html yang memungkinkan kita untuk secara deklaratif mengikat DOM yang dirender ke data instance vue yang mendasarinya
- Di dalam konten: menambahkan kurung kurawal
- Di atribut elemen: menggunakan v-bind
- Elemen HTML: menggunakan v-bind
#### Vue Reactivity
Vue instance memiliki property bernama data, jika value dari data ada yang berubah maka value yang ditampilkan pada interface akan berubah otomatis tanpa harus dimuat ulang

### Vue Directive
adalah atribut khusus yang diawali dengan v- yang berfungsi untuk menjalankan suatu perintah atau ekspresi javascript di dalam atribut
#### Macam
- v-bind: direktive untuk memberitahu vue jika ingin melakukan one way data binding
- v-model: direktive untuk memberitahu vue jika ingin melakukan two way data banding
- v-if, v-else dan v-else-if: direktif yang digunakan untuk melakukan rendering secara kondisional
- v-on: direktif untuk memberitahu vue jika ingin memanggil fungsi
- v-for: direktif untuk memberitahu vue jika ingin melakukan pengulangan

#### Vue directive yang perlu diingat
- Directif data banding: v-bind, v-model, v-html, v-text
- Directive conditional rendering: v-if, v-else, v-else-if
- Directive pengulangan: v-for
- directive event: v-on


### 3. Events dan Method
- Memantau Events: v-on berguna untuk mendengarkan peristiwa DOM dan menjalankan beberapa JavaScript saat dipicu
- Menggunakan Method: method adalah fungsi yang dapat diakses secara langsung pada instance VM, atau menggunakannya dalam ekspresi direktif

#### Computed Properties dan Watchers
Memberikan terlalu banyak logika secara langsung di template dapat menyebabkan menjadi berat dan susah untuk dipelihara. Untuk menggunkan logika yang kompleks, kita harus menggunakan computed properties
#### Components
Komponen adalah Vue instance yang dapat digunakan kembali dengan nama yang kita definisikan. Kita bisa menggunakan komponen ini sebagai kustom elemen di dalam instance root Vue yang dibuat dengan new Vue