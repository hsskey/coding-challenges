/**
 * @풀이결과 C+ (선택하신 결과를 여기에 기입하세요)
 * @반복횟수 3  (실제 반복한 횟수를 여기에 기입하세요)
 */
 const fs = require('fs')
 const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`
 const input = fs.readFileSync(filePath).toString().split('\n')
 const n = Number(input[0])
 const arr = input[1].split(' ').map(Number)
 const m  = Number(input[2]) // 총예산 (485)
 
 let start = 1
 let end = Math.max(...arr)
 let result = 0 // 최대 상한액
 while(start <= end) {
     let mid = parseInt((start + end) / 2)
     let total = 0 // 총합계    
     for(let x of arr) {
         total += Math.min(x, mid)
     }
     if(total <= m) {
         start = mid + 1 
         result = mid
     } else {
         end = mid - 1
     }
 }
 
 console.log(result)