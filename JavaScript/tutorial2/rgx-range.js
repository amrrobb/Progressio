var str = 'Bulan Ke 1 sd ke 4';

// word "ke"
console.log(str.match(/ke/gi));

// e and k
console.log(str.match(/[ek]/g));

// not e and k
console.log(str.match(/[^ek]/g));

// rang a - i
console.log(str.match(/[a-j]/gi));
