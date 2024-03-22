const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().split('\n')
const N = Number(input[0])
const times = []


for (let i = 1; i <= N; i++) {
    times.push(input[i].split(' ').map(Number))
} 

times.sort((a, b) => {
    if(a[1] !== b[1]) {
        return a[1] - b[1]
    } else {
        return a[0] - b[0]
    }
})

let cnt = 1
let current = 0
for(let i = 1; i < N; i++) {
    if(times[current][1] <= times[i][0]) {
        current = i;
        cnt += 1
    }
}

console.log(cnt)