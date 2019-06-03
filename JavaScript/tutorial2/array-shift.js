function cities() {
    var city = ["london", "birmingham", "buckingham", "manchester"];
    console.log(city);
    console.log("---------------");
    

    city2 = city.shift();
    console.log(city2);
    

    return city;
}

console.log(cities());
