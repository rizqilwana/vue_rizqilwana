## Relational Database

### Introduction Database
Database adalah sekumpulan data yang terorganisir
### Relationship Database
- One to one: user hanya memiliki satu poto profile
- One to many: user bisa memiliki banyak tweets
- Many to many: user bisa memiliki banya follower user, 1 user bisa difollow banyak user
#### RDBMS (Relational Database Management System)
Software yang menggunakan Relational Database Model sebagai dasarnya (contoh: MySQL)
#### Jenis Perintah SQL
- DDL (Data Definition Language)
- DML (Data Manipulation Language)
- DCL (Data Control Language)
#### DDL STATEMENT
- Create database: database_name
- Use: database_name
- Create table
- Drop table
- Renbame table
#### Create table with is schema
- Create table: table_name(coloumn1 data_type PRIMARY KEY,
                        coloumn2 data_type FOREIGN KEY),
                        Cloumn data_type, FRIMARY KEY (one or more coloumn)
#### Modify table schema
- ALTER TABLE table_name
- ADD COLOUMN coloumn_name data_type
#### Type Data MySQL
- DML (Data Manipulation Language): perintah yang digunakan untuk memanipulasi data dalam table dari suatu database
#### Statement Operation
- INSERT
- SELECT
- UPDATE
- DELETE
#### Join Standar SQL Ansi
- INNER
- LEFT
- RIGHT
#### Fungsi Agregasi
- min: Fungsi di mana nilai bebeapa baris dikelompokkan bersama untuk membentuk nilai ringkasan tunggal
- max: Digynakan untuk mendapatkan nilai maksimum atau nilai terbesar dari sebuah record di table 
- Sum: digunakan untuk mendapatkan jumlah total nilai dari sebuah data atau record di table
- AVG: Digunakan untuk mencari nilai rata-rata (average) dari sebuah data atau record di table
- Count: Digunakan untuk mencari jumlah dari sebuah data atau record di table
- Having: digunakan untuk menyeleksi data berdasarkan kriteria tertentu, di mana kriteria berupa fungsi aggregat

### Subquery
Subquery atau inner query atau nested query adalah query di dalam query SQL lain.
<br>
Sebuah subquery digunakan untuk mengembalikan data yang akan digunakan dalam query utama sebagai syarat untuk lebih membatasi data yang akan diambil.
<br>
Subquery dapat digunakan dengan select, insert, update, dan delete statements bersama dengan operator seperti in, between, dll

#### Peraturan yang Harus ditaati
- harus tertutup dalam tanda kurung
- sebuah subquery hanya dapat memiliki satu kolom pada klausa select, kecuali beberapa kolom yang di query utama untuk subquery untuk membandingkan kolom yang dipilih.
- Subqueries yang kembali lebih dari satu baris hanya dapat digunakan dengan beberapa value operator, seperti operator IN
- Daftar select tidak bisa menyertakan referensi ke nilai-nilai yang mengevaluasi ke BLOB, ARRAY, CLOB, atau NCLOB
- Sebuah subquery tidak dapat segera tertutup dalam fungsi set

### Function
Sebuah kumpulan statement yang akan mengembalikan sebuah nilai balik pada pemanggilnya.
- Demiliter: memberitahu kepada MySQL soal demiliter yang digunakan, secara default menggunakan ; jadi bila tanda ; mysql akan mengartikan akhir dari statement, pada contoh di atas demiliter yang digunakan $$ jadi akhir statementnya adalah $$
- Create fungtion: header untuk membuat function
- Return: menentukan tipe data yang di-returnkan oleh function
- Deterministic/ not deterministic: untuk menentukan yang bisa menggunakan function ini adalah user pembuatnya saja (deterministik) atau user siapa saja (not deterministic)
- Begin End: body dari function jadi semua SQL nya di tulis di sini
- Create trigger: header untuk membuat function
- Declarate: syntax untuk mendeclarate kan sesuatu hal/variabel
- Old: variabel yang menyimpan nilai dari dalam data yang sedang berinteraksi/ dipanggil
- New: variabel yang menyimpan nilai dari data yang baru masuk/sedang diinput


### Entity Relationship Diagram
### SQL Statement















