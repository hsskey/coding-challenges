const fs = require('fs');

const input = fs.readFileSync('example.txt', 'utf8').trim().split('\n');

const N = Number(input[0])
const P = input[1].split(' ').map(Number)

P.sort((a, b) => a - b)

let result = 0
P.reduce((acc, curr) => {
    result += acc + curr
    return acc + curr
}, 0)
console.log(result)