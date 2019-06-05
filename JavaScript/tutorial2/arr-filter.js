let datum = [
    {
        name: "Adi",
        gender: "m" 
    },
    {
        name: "Jon",
        gender: "m"
    },
    {
        name: "Kimi",
        gender: "f"
    }
    
];

let m = datum.filter(people => {
    return people.gender === "m";
})
console.log(m);
