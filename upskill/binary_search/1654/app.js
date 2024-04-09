/**
 * @풀이결과 B (선택하신 결과를 여기에 기입하세요)
 * @반복횟수 0  (실제 반복한 횟수를 여기에 기입하세요)
 */
const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(filePath).toString().split('\n')
const [k, n] = input[0].split(' ').map(Number)
const arr = []

for(let i = 0; i < k; i++) {
    arr.push(Number(input[i + 1]))
}

let start = 1
let end = Math.max(...arr)
let result = 0 // N개를 만들수있는 최대길이
while(start <= end) {
    let mid  = parseInt((start + end) / 2)
    let temp = 0
    for(let x of arr) {
        temp += parseInt(x / mid)
    }
    if(temp < n) {
        end = mid -1
    }else {
        start = mid + 1
        result = mid
    }
}
console.log(result)
