var num = [1,2,5,7,99,54,23,9,16,9,5,7,20];

// ascending
function asc() {
    var asc = num.sort((a,b) => a - b);  
    return asc;
}    
// descending
function desc() {
    var desc = num.sort((a,b) => b - a);
    return desc;
}

function filt() {
    y = num.filter(x=> x > 10);
    return y;
}
 

console.log("Sebelumnya : ", num);
console.log("Ascending : ", asc());
console.log("Descending : ", desc());
console.log("Filter > 10 : " filt());




