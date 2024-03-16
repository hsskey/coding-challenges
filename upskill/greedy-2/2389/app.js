const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(filePath).toString()

let n = Number(input)
let count = 0
let flag = false


while(n >= 0) { // 더이상 반복할 수없을 때까지 반복
    // n이 0이 되거나, n이 5로 나누어 떨어지는 값인 경우
    if(n === 0 || n % 5 === 0) {
        count += Math.floor(n / 5) // 5로 나눈 몫 더하기
        console.log(count)
        flag = true
        break
    }
    // 기존의 값이 5로 나누어떨어지는 값이 될때까지 3을 빼줌
    n -= 3
    count += 1
}

if(!flag) {
    console.log(-1)
}