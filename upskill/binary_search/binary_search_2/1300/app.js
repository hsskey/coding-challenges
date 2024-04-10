/**
 * @풀이결과 C (선택하신 결과를 여기에 기입하세요)
 * @반복횟수 0 (실제 반복한 횟수를 여기에 기입하세요)
 */
const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(filePath).toString().split('\n')

let n = Number(input[0]) // 배열의 크기(N)
let k = Number(input[1]) // 인덱스 K

let start = 1 // 배열에 존재할 수 있는 가장 작은 값
let end = n * n // 배열에 존재할 수 있는 가장 큰 값 (문제 범위상 10**10도 가능)

let result = 0

while(start <= end) { // 이진 탐색 수행
    let mid = parseInt((start + end) / 2) // 현재의 중간점
    let total = 0 // mid 보다 작거나 같은 "데이터의 개수"
    for (let i = 1; i <= n; i++) {
        total += Math.min(parseInt(mid / i), n)
    }

    if(total >= k) { // mid보다 작거나 같은 데이터의 개수가 k 이상이라면
        result = mid
        end = mid - 1
    } else {
        start = mid + 1
    }
}

console.log(result)