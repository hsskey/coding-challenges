/**
 * @풀이결과 C (선택하신 결과를 여기에 기입하세요)
 * @반복횟수 0 (실제 반복한 횟수를 여기에 기입하세요)
 */
const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(filePath).toString().split('\n')

const [n, k] = input[0].split(' ').map(Number)
const arr = input[1].split(' ').map(Number)

let result = 0
let eraseCount = 0
let end = 0
// start를 고정하고 end를 최대한 오른쪽으로 이동
for(let start = 0; start < n; start++) {
    while(end < n) {
        if(arr[end] % 2 === 0) end++ // 짝수인 경우 end 증가
        else { // 홀수인 경우
            // 지울수 있는 여건이 있다면 지우기
            if(eraseCount === k) break // 더 지울수없다면 종료
            eraseCount++
            end++
        }
    }
    result = Math.max(result, end - start - eraseCount) // 범위의 길이 증가
    // start를 한칸 오른족으로 이동할때, 가능하다면 지울수있는 개수 증가
    if(arr[start] % 2 === 1) eraseCount--
}

console.log(result)
