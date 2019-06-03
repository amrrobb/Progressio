function cities() {
    var city = ["london", "birmingham", "buckingham", "manchester"];
    console.log(city);
    // console.log("---------------");
    

    city.splice(2,0,'liverpool');
    // city.splice(2,1,'liverpool'); // menghapus 1 data di depannya
    // city.splice(2,2,'liverpool'); // menghapus 2 data di depannya
    // console.log(city2);
    
    //menghapus data pada array
    city.splice(3,1)
    return city;
}

console.log(cities());