const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().split('\n')

let n = Number(input[0])
let dist = input[1].split(' ').map(Number)
let cost = input[2].split(' ').map(Number)

// 주유 비용(cost) 배열의 값을 "비오름차순"이 되도록 변환
// ex) [5,2,4,1] -> [5,2,2,1]

let minCost = cost[0]
for(let i = 0; i < n; i++) {
    minCost = Math.min(minCost, cost[i])
    cost[i] = minCost
}

// 도로당 이동 비용의 합 계산
let answer = 0 // 정수값이 커질수 있기때문에 사용
for(let i = 0; i < n -1; i++) {
    answer += dist[i] * cost[i]
}

console.log(answer)