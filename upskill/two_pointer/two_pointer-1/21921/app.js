const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(filePath).toString().split('\n')
const firstLine = input[0].split(' ').map(Number)
const secondLine= input[1].split(' ').map(Number)

const [n, x] = firstLine // 5, 2
const data = secondLine

let maxVisit = 0 // 2일동안 최대 방문자수
let cnt = 1 // 기간이 몇개인지

let end = 0
let temp = 0
for(let start = 0; start < data.length; start++) {
    while((end < start + x) && (end < data.length)) {
        temp += data[end] 
        end += 1
    }   
    if(temp === maxVisit) {
        cnt += 1
    }
    maxVisit = Math.max(temp, maxVisit)
    temp -= data[start]
}

if(maxVisit === 0) {
    console.log('SAD')
} else {
    console.log(maxVisit)
    console.log(cnt)
}