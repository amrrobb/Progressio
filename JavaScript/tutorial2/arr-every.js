let product = [
    {name: "Apple", type: "fruit"},
    {name: "Mango", type: "fruit"}

];

console.log(
    product.every(prod =>prod.type === "fruit")
);

console.log("==================");

// mengecek apakah semua tipe adalah fruit
let product2 = [
    {name: "Apple", type: "fruit"},
    {name: "Mango", type: "fruit"},
    {name: "Monitor", type: "computer"}

];

console.log(
    product2.every(prod =>prod.type === "fruit")
);