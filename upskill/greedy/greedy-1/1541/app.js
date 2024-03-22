const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(filePath).toString()

let groups = input.split('-')
let answer = 0
for(let i = 0; i < groups.length; i ++) {
    // 각 그룹 내부에서 덧셈(+) 연산 적용
    let current = groups[i].split('+').map(Number).reduce((acc, curr) => acc + curr)
    if(i === 0) answer += current
    else answer -= current
}
console.log(answer)