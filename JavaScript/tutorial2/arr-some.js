// mengecek apakah ada tipe tersebut di dalam array

let product = [
    {name: "Apple", type: "fruit"},
    {name: "Andi", type:"human"},
    {name: "Mango", type: "fruit"}

];

console.log(
    product.some(prod =>prod.type === "fruit")
);

console.log("==================");

// mengecek apakah semua tipe adalah fruit
let product2 = [
    {name: "Apple", type: "fruit"},
    {name: "Mango", type: "fruit"},
    {name: "Monitor", type: "computer"}

];

console.log(
    product2.some(prod =>prod.type === "computer")
);