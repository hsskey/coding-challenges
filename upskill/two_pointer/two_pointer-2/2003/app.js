/**
 * @풀이결과  (선택하신 결과를 여기에 기입하세요)
 * @반복횟수  (실제 반복한 횟수를 여기에 기입하세요)
 */
const fs = require('fs')
const { resourceLimits } = require('worker_threads')
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(filePath).toString().split('\n')

const [n, m] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)

let result = 0
let end = 0
for(let start = 0; start < n; arr++) {
    while(end < n && arr[end] <= m) {
        if(arr[start] + arr[end])
    }
}