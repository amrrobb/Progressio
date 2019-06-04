var str = ["Saya ingin belajar bersama"];

var arr = str.toString().split(" ");
// for each
function foreach() {
    arr.forEach(function (item, index, array) {
        console.log("Item : ", item, " Index ke ",index);
              
    })
    
}

foreach()

