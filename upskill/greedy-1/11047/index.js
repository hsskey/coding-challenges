const fs = require('fs');

const input = fs.readFileSync('example.txt', 'utf8').trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const coinValues = input.slice(1, N + 1).map(Number);

let count = 0
const parsedArr = coinValues.filter((item) => item <= K).sort((a,b) => b - a) 

let total = K

for(item of parsedArr) {
    const q = Math.floor(total / item)
    if(q !== 0) {
        count += q
        total %= item
    }
}
// while(total > 0) {
//     for(item of parsedArr) {
//         const q = Math.floor(total / item)
//         if(q !== 0) {
//             total -= item * q
//             count += q
//         } else {
//             continue
//         }
//     }
//     continue
// }   


console.log(count)