const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`

const input = fs.readFileSync(filePath).toString().trim().split('\n')

const N = parseInt(input, 10)
let cnt = 0

for(let i = 1; i <= N; i++) {
    for(let j = 1; j <= N; j++) {
        for(let k = 1; k <= N; k++) {
            if(i + j + k === N) {
                if(k >= j + 2) {
                    if(i % 2 === 0) {
                        cnt += 1
                    }
                }
            }
        }
    }
}

console.log(cnt)