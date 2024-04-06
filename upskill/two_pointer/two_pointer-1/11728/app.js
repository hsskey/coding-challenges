/**
 * @풀이결과  (선택하신 결과를 여기에 기입하세요)
 * @반복횟수  (실제 반복한 횟수를 여기에 기입하세요)
 */
const fs = require('fs')
const { resourceLimits } = require('worker_threads')
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(filePath).toString().split('\n')
const[aLen, bLen] = input[0].split(' ').map(Number)
const a = input[1].split(' ').map(Number)
const b = input[2].split(' ').map(Number)

const result = []

let aPointer = 0
let bPointer = 0

while(aPointer < a.length && bPointer < b.length) {
    if(a[aPointer] < b[bPointer]) {
        result.push(a[aPointer])
        aPointer++
    }else {
        result.push(b[bPointer])
        bPointer++
    }
}

while(aPointer < a.length) {
    result.push(a[aPointer])
    aPointer++
}

while(bPointer < b.length) {
    result.push(b[bPointer])
    bPointer++
}

console.log(result.join(' '))