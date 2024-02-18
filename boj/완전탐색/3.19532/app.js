const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`

/**
 * -10_000 <= x ,y <= 10_000
 */
const input = fs.readFileSync(filePath).toString().split(" ").map(Number)

const A = input[0]
const B = input[1]
const C = input[2]
const D = input[3]
const E = input[4]
const F = input[5]


for(let x = (-999); x < (1000); x++) {
    for(let y = (-999); y < (1000); y++) {
        if(A * x + B * y === C) {
            if(D * x + E * y === F) {
                console.log(x,y)
                break
            }
        }
    }
}
