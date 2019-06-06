var str = "123 abc _$%^*..";

// titik
console.log(str.match(/\./g));

// character selain new line 
console.log(str.match(/./g));

// digit
console.log(str.match(/\d/g));

// non digit
console.log(str.match(/\D/g));

// word -> angka huruf underscore
console.log(str.match(/\w/g));

// non word
console.log(str.match(/\W/g));

// space
console.log(str.match(/\s/g));

// non space
console.log(str.match(/\S/g));

