/**
 * 주어진 정수 배열에서 최대 합을 가진 연속 부분 배열의 합을 계산합니다.
 * 완전탐색 방법을 사용하여 이 문제를 해결합니다.
 *
 * @param {number[]} nums - 정수 배열
 * @return {number} 최대 부분 배열의 합
 */
 function maxSubArrayBruteForce(nums) {
    let maxSum = nums[0]

    for(let i = 0; i < nums.length; i++) {
        let curSum = 0
        for(let j = i; j < nums.length; j++) {
            curSum += nums[j]
            maxSum = Math.max(maxSum, curSum)
        }
    }
    return maxSum
}

// 테스트 케이스
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArrayBruteForce(nums)); // 출력: 6
