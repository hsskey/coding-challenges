const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
const s = fs.readFileSync(filePath).toString()
const parsedS = parseInt(s)

let sum = 0
let current = 0

while(sum <= parsedS) {
    current += 1
    sum += current
}

console.log(current - 1)