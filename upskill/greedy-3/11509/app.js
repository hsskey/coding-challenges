const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().split('\n')

let data = input[1].split(' ').map(Number)
let result = 0
let arrow = new Array(1000001).fill(0)

for(let x of data) {
    if(arrow[x] > 0) {
        console.log('2')
        arrow[x] -= 1
        arrow[x - 1] += 1
    } else {
        console.log('1')
        arrow[x - 1] += 1
        result += 1
    }
}

console.log(result)