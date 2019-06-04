var city = ["london", "birmingham", "buckingham", "manchester"];

//map v1
function map1() {
    
    city.map((item, index, array) => {
        console.log(item);
        console.log(index);
        console.log(array);
        console.log("===========================");
    });

}
map1();
console.log("---------------------------");


// mpa v2
function map2() {
    
    city.map(function(item, index, array) {
        console.log(item);
        console.log(index);
        console.log(array);
        console.log("===========================");
         
    })
}
map2();