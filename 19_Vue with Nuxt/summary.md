## Vue with Nuxt
### Pengenalan Nuxt
- Nuxt adalah kerangka kerja yang dibangun di atas Vue yang membuat pengembangan web menjadi sederhana dan ampuh
- Cara kerja nuxt: Instalasi aplikasi => Jalankan aplikasi
- Untuk menjalankan aplikasi,terdapat beberapa perintah yang tertulis di script di dalam package.json
### Struktur Direktori Nuxt
#### Perbedaan struktur direktori dengan vue
- -scr
- -public
- -views
- -router
- +pages
- +static
- +layout
#### Pages
Router di nuxtsecara otomatis membaca direktori ini sehingga file yang ada di direktori/pages langsung terhubung menjadi path di halaman
#### Layouts
Setiap file di direktori/layout akan membuat tata letak khusus yang dapat diakses dengan properti layout di komponen halaman
#### Static
Semua file yang disertakan akan secara otomatis di ekspose di Nuxt dan dapat diakses melalui URL root proyek
### Nuxt SSG & SSR
#### SSG (Static Site Generation) 
Cocok untuk situs web yang tidak memiliki halaman dinamis
- halaman home
- halaman penulis
- halaman kontak, dll
#### Cara Kerja SSG
Ketika sebuah proyek dibangun untuk sebuah produksi, file HTML siap pakai akan dibuat di folder dist, kemudiah disuguhkan oleh server dan dapat diakses per masing-masing file HTML
#### SSR  (Server Site Rendering)
Solusi terbaik untuk proyek yang halamannya dibuat secara real time, yaitu melalui panel admin, misalnya, halaman blog dan e-commerce
#### Cara Kerja SSR
Server yang akan dibangun ke dalam Nuxt akan berjalan dalam produksi, yang akan memastikanbahwa file HTML baru dihasilkan secara real time ketika data baru diterima, misalnya melalui API.
#### Implementasi SSG
- nuxt.config.js
- hasil berupa direktori /dist yang kemudian dapat dideploy ke Sttic Hosting
#### Implementasi SSR
- nuxt.config.js
- hasil berupa direktori /.nust yang emudian dapat dideploy ke NodeJSserver

### SEO(Search Engine Optimaization) Meta
- SEO: Proses meningkatkan kualitas dan kuantitas lalu lintas situs web ke situs web ataupun ke halaman web dari mesin pencari
- SEO Meta tag: tag tak terlihat di dalam head yang memberikan data tentang halaman ke mesin pencari dan pegunjung situs web
#### Cara Kerja 
SEO Meta Tag dapat diterapkan dari Nuxt config untuk pengaturan global, yaitu konten head akan sama di setiap halaman aplikasi
#### SEO Meta Tag Penting
- Informasi dasar: title dan description 
- Identitas unik dengan link canonical
- Informasi untuk media sosial, open graph: og:title, og:description, og:image
#### SEO di dalam Body Tag
- Judul: h1
- Text alteratif untuk gambar: alt
#### SEO Lainnya
- Peta indexing: sitemap
- Pengarah clawler: robots.txt

### PWA (Perogressive Web Apps)
Dibuart dan disempurnakan dengan API modern untuk menghadirkan peningkatan kemmapuan, keandalan, dan kemudahan pemasangan sekaligus menjangkau siapa saja, di mana saja, di perangkat apa pun basis kode tunggal
