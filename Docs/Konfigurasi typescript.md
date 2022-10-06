<!--
Author: Wisnu Box
Date: 07 October 2022
 -->

## Install typescript

untuk melakukan konfigurasi typescript, terlebih daulu install module/package berikut

- typescript

dengan command dibawah init

```
$ npm install typescript -g
```

## Konfigurasi typescript pada directory

Typescript tidak akan berjalan sebelum melakukan konfigurasi pada folder.
karena tadi sudah melakukan install typescipt secara global, maka typescript tersebut bisa dipanggil di mana saja.
buat folder _typescript-test_ terlebih dahulu dengan perintah dibawah:

```
$ mkdir typescript-test && cd typescript-test
```

dan init folder dengan typescript dengan

```
$ tsc --init
```

maka didalam folder tersebut akan ada sebuah file _tsconfig.json_

## Running typscript

Menjalankan kode typescript ada 2 cara yaitu

- Menjalankan secara langsung dengan ts-node
- menjalankan kode dengan melakukan compile/build terlebih dahulu(mengconvert file **.ts** ke dalam bentuk **javascript**)

## Menjalankan dengan **ts-node**

untuk menjalankan typescript tanpa melakuakan compile dengan mengikuti langkah berikut:

install ts-node secara global

kemudian ketikan

```
$ ts-node nama_file.ts
```

maka output pada terminal sesuai dengan output pada file **nama_file.ts**

## Menjalankan typescript dengan mengcompile

Menjalankan typescript dengan compile, hanya membutuhkan package **typescript** saja.

kemudian jalankan dengan perintah

```
$ tsc
```

maka file tsc pada folder sekrang akan dicompile ke javascript

setelah itu, dapat dijalankan seperti file javascript biasa. Dengan perintah

```
$ node nama_file.js
```

## Compile otomatis ketika ada perubahan pada file

untuk melakukan compile secara otomati, terdapat 2 cara juga
yaitu dengan cara dibawah

```
$ tsc -w
```

maka setiap kali ada perubahan pada file didalam folder saat ini maka perintah `tsc` akan dijalanakan

atau dapat menggunakkan nodemon untuk package ts-node

terlebih dahulu install **ts-node** dan **nodemon**

```
$ npm install ts-node nodemon
```

kemudian jalankan perintah dibahas ini

```
$ nodemon --watch "src/**" --ext "ts,json" --ignore "src/**/*.spec.ts" --exec "ts-node src/index.ts"
```

atau misal tidak ingin menulis terlalu banyak. dapat membuat file ** nodemon.json**

kemudian didalam nodemon.json isin dengan script berikut

```json
{
  "watch": ["src/"],
  "ext": "ts,json",
  "ignore": ["src/**/*/spec.ts"],
  "exec": "ts-node ./src/index.ts"
}
```

keterangan:

- watch = nodemon akan memantau file pada folder src. apakah ada perubahan file pada difolder tersebut
- ext = nodemon hanya memantau file yang berextensi _ts atau json_
- ignore = nodemon tidak akan memantau atau membiarkan file yang diinisialisasi pada key json tersebut
- exec = jika file yang di pantau oleh nodemon terdapat perubahan, makan nodemon akan menjalankan perintah pada exec ini
