// menghapus spasi depan n belakang
var x = " Soto gulai enak rasanya ";
console.log(x.trim());

// concat untuk menggabungkan string
var y = x.trim().concat(", namun harganya mahal")
console.log(y);

// includes: mengecek apakah tedapat pada variabel
console.log(x.includes("Enak"));
console.log(y.includes("namun"));

// repeat, untuk mengulang 
console.log("===++++++===".repeat(4));

// start end, mencari kata di awal dan akhir string
console.log(x.startsWith("Soto"));
console.log(y.endsWith("mahal"));
console.log(y.startsWith("Soto"));

