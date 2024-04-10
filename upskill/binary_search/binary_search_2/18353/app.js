/**
 * @풀이결과 C (선택하신 결과를 여기에 기입하세요)
 * @반복횟수 0 (실제 반복한 횟수를 여기에 기입하세요)
 */
const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`
const input = fs.readFileSync(filePath).toString().split('\n')
const nLen = Number(input[0])
const nArr = input[1].split(' ').map(Number)
const mLen = Number(input[2])
const mArr = input[3].split(' ').map(Number)

nArr.sort((a,b) => (a - b))
const result = []
function lowerBound(arr, target, start, end) {
    while(start < end) {
        let mid = parseInt((start + end) / 2)
        if(arr[mid] >= target) {
            end = mid
        }else {
            start = mid + 1
        }
    }
    return end
}

function uppaerBound(arr, target, start, end) {
    while(start < end) {
        let mid = parseInt((start + end) / 2)
        if(arr[mid] > target) {
            end = mid
        } else {
            start = mid + 1
        }
    }
    return end
}

function countByRange(arr,leftValue, rightValue) {
    let rightIndex = uppaerBound(arr,rightValue, 0, arr.length)
    let leftIndex = lowerBound(arr, leftValue, 0, arr.length)
    return rightIndex - leftIndex
}

for(let x of mArr) {
    let cnt = countByRange(nArr, x, x)
    result.push(cnt)
}

console.log(result.join(' '))
