function cities() {
    var city = ["london", "birmingham", "buckingham", "manchester"];
    console.log(city);
    console.log("---------------");
    

    city2 = city.shift();
    console.log(city2);
    

    return city;
}

console.log(cities());

// function cities() {
//     var city = ["london", "birmingham", "buckingham", "manchester"];
//     for (let i = 0; i < city.length; i++) {
//         if (city[i] != null) {
//             console.log(city);
//             console.log("---------------");
            
        
//             city2 = city.shift();
//             console.log(city2);
                    
//             }
//         }
       
        
//     } 
    

//     return city;
// }

// console.log(cities());
