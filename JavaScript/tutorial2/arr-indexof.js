var alphabet = ["a", "b", "c", 'd', "e", "f", "g", "h", "i"];

// indexof
console.log(alphabet.indexOf("f"));

console.log("================================");


// for each
function foreach() {
    alphabet.forEach(function (item, index, array) {
        console.log(item);
        console.log(index);
        console.log(array);
        
    })
    
}

foreach()

