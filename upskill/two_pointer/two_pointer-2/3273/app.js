/**
 * @풀이결과  (선택하신 결과를 여기에 기입하세요)
 * @반복횟수  (실제 반복한 횟수를 여기에 기입하세요)
 */
const fs = require('fs')
const { resourceLimits } = require('worker_threads')
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(filePath).toString().split('\n')

const n = Number(input[0])
const arr = input[1].split(' ').map(Number)
const target = Number(input[2])
let result = 0
let left = 0
let right = arr.length - 1

arr.sort((a,b) => a - b)
while(left < right) {
    if(arr[left] + arr[right] < target) {
        left++
    }else if(arr[left] + arr[right] > target) {
        right--
    }else if(arr[left] + arr[right] === target) {
        result++
        left++
    }
}
console.log(result)