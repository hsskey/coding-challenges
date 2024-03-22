const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().split(' ').map(Number)

let n = input[0] // 공의 갯수 (6)
let k = input[1] // 바구니  (3)

let summary = 0 // 1부터 K까지의 합
for(let i = 1; i < k + 1; i++) {
    summary += i
}

if(summary > n) {
    console.log(-1) 
} else { // 공의 개수가 부족한 경우
    n -= summary
    if(n % k === 0) {
        console.log(k - 1)
    } else {
        console.log(k)
    }
}