function cities() {
    var city1 = ["london", "birmingham", "buckingham", "manchester"];
    // console.log("---------------");
    var city2 = ["swansea","liverpool"];
    // console.log(city2);
    // console.log(city);

    // concat array, menggabungkan 2 array jadi 1
    var city = city1.concat(city2)
    
    return city;
}

console.log(cities());
