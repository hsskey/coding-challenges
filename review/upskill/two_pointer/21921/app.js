/**
 * @풀이결과 C (선택하신 결과를 여기에 기입하세요)
 * @반복횟수 1  (실제 반복한 횟수를 여기에 기입하세요)
 */
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().split('\n')
// 배열의 길이 n , 기간 x
const [n, x] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)

let sum = 0
// 슬라이딩 윈도우 초기화
for(let i = 0; i < x; i++) {
    sum += arr[i]
}

let maxSum = sum // 가장 큰 합
let count = 1 // 기간의 개수

// 슬라이딩 윈도우 시작
let left = 0
let right = x - 1


while(true) { // 윈도우를 한 칸 오른쪽으로 이동하기
    left += 1
    right += 1
    
    if(right > n) break
    sum = sum + arr[right] - arr[left - 1] // 합을 계산하여 정답 갱신
    if(maxSum == sum) count += 1
    else if(maxSum < sum) { // 더 큰 합을 찾은 경우
        maxSum = sum
        count = 1
    }
}

if(maxSum === 0) console.log('SAD') // 정답 출력
else {
    console.log(maxSum)
    console.log(count)
}