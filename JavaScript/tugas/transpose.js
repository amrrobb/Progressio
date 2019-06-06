function transpose(matrix) {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
}
   
var nestedArray = [
    [1,2,3,4],
    ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
    ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

console.log(transpose(nestedArray));
