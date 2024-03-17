const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
let [a, b] = fs.readFileSync(filePath).toString().split(' ').map(Number); // 바로 숫자로 변환
let cnt = 1;
let flag = false

while(a <= b) {
    if(a === b) {
        flag = true
        break
    } else {
        if(b % 2 === 0) {
            b = parseInt(b / 2)
            cnt += 1
        }else if(b % 10 === 1) {
            b = parseInt(b / 10)
            cnt += 1
        } else {
            break
        }
    }
}

if(!flag) {
    console.log(-1)
} else {
    console.log(cnt)
}

