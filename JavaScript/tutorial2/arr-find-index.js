var num = [1,2,5,7,99,54,23,9,16,9,5,7,20];

var found = num.find(function(element){
    return element > 10; 
})

console.log(found);

var found2 = num.findIndex(x => {
    return x > 9;
});

console.log(found2);

    
