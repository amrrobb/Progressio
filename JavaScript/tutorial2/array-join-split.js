var alphabet = ["a", "b", "c", 'd', "e", "g", "h", "i"];

console.log(alphabet);

// array join, menggabungkan isi array dengan penghubung -> string
var abjad = alphabet.join(" - ");
console.log(abjad);

var abjad = alphabet.join(" ");
console.log(abjad);

console.log("-------------------");

// array split, mengubah string menjadi array dengan pembagi
var aha = abjad.split(" ");
console.log(aha);
