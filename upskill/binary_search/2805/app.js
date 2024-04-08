/**
 * @풀이결과 B (선택하신 결과를 여기에 기입하세요)
 * @반복횟수 0  (실제 반복한 횟수를 여기에 기입하세요)
 */
const fs = require('fs')
const { resourceLimits } = require('worker_threads')
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(filePath).toString().split('\n')
let [n, m] = input[0].split(' ').map(Number) // 4 7
const arr = input[1].split(' ').map(Number) // 20 15 10 17
let h = 0 // 톱의 높이(적어도 M미터의 나무를 집에 가져가기 위해서 절단기에 설정할 수 있는 높이의 최댓값)

let start = 1
let end = Math.max(...arr) // 20

while(start <= end) {
    let mid = parseInt((start + end) / 2) // 10
    let temp = 0
    for(let x of arr) {
        // 나무 자르기
        if(mid < x) {
            temp += x - mid
        }
    }

    if(m <=temp) {
        start = mid + 1
        h = mid
    } else {
        end = mid -1
    }
}

console.log(h)