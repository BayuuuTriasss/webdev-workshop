// String
// const String = "Ini Apa Ya Plis Jawa";

// Integer
// let number = 100;

// Bolean
// const Boolean = false

// Array
// const Array = ["Tumbas", "Hamba Tebas", "Ambatron"];

// console.log(Array[0]);
// console.log(Array[1]); 
// console.log(Array[2]);

// Object
// const Object = [
//     {
//     name: "Ambatron",
//     age: 17,
//     hobby: "Coding"
//     },
//     {
//     name: "Tumbas",
//     age: 20,
//     hobby: "Ngasah Parang"
//     },
//     {
//     name: "Hamba Tebas",
//     age: 25,
//     hobby: "Ngasah Linggis Hitam"           
//     }
// ];
// console.log(Object);

// const mhs = {
//     name: "Ambatron",
//     age: 17,
//     ips: [3.50, 3.60, 3.70],
//     alamat: {
//         jalan: "Jl. Ngawi Merdeka No. 69",
//         kota: "Ngawi",
//         provinsi: "Jawa Timur"
//     }
// };
// console.log(mhs.ips[0]);
// console.log(mhs.alamat.kota);

// const nilai = 80;

// if (nilai >= 90) {
//     console.log("Nilai kamu A");
// } else if (nilai >= 80) {
//     console.log("Nilai B");
// } else if (nilai >= 70) {
//     console.log("Nilai kamu jelek sekali");
// } else if (nilai >= 60) {
//     console.log("Ulang Matakuliah");
// } else {
//     console.log("E = Engginering");
// }

// Loops
for (let angka = 0; angka < 5; angka++) {
    console.log("Aku anak ke -", angka);
}

// While
let nilaiAwal = 1;
while (nilaiAwal <=10) {
    console.log("Aku Ambatron");
    nilaiAwal++;
}

// -------------------------------Perkondisian dan Perulangan-------------------------------
let jumlahAngkot = 5;
let angkotBeroperasi = 3;

for (let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
    } else {
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi.");
    }
}

