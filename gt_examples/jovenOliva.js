/**
 * @param {string} password
 * @return {number}
 */
function solution(password) {
    const nums = password.match(/\d/g).map(Number) 
    const sum = nums.reduce((a,b) => a + b)
    if(sum > 10) {
     return sum   
    }
    return nums.join
}


console.log(solution('AB1234'))