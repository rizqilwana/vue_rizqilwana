var a = 5;
let b = "kampus merdeka";
let nama = "Budi";
const asal = "Indonesia";

function NewFunction(){
    console.log(
        nama + "terdaftar sebagai kegiatan kampus merdeka"
    );
}

a = b;
nama = b;

console.log("a adalah = " + a);
console.log("b adalah = " + b);

function perkenalan(){
    let asal = "Indonesia";
    return console.log(
        "perkenalkan nama saya" +
        nama+
        "nomor urut" + 
        a +
        "sekarang sedang mengikuti" +
        b + 
        "berasal dari" + 
        asal
    );
}