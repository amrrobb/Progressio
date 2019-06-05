const arr = [1,2,3,4];

const reducer = (acc, val) => acc + val;

console.log(arr.reduce(reducer));

console.log(arr.reduce(reducer, 5));

console.log("===================");

const arr2 = [[1,0],[2,1],[3,2],[4,3]];

const ars = arr2.reduceRight((acc, val) =>
    acc.concat(val)
);

console.log(ars);

