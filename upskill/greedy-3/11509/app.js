const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().split('\n')

let data = input[1].split(' ').map(Number)
let result = 0
let arrow = new Array(1000001).fill(0) // 각 높이에 화살이 몇개있는지 기록용 배열

for(let item of data) {
    console.log(arrow);
    if(arrow[item] > 0) { // 해당 높이에 화살이 있다면
        arrow[item] -= 1
        arrow[item - 1] += 1
    } else { //해당 높이에 화살이 없다면
        arrow[item - 1] += 1
        result += 1
    }
}

console.log(result)