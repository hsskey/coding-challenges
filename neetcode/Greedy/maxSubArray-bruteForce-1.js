/**
 * 주어진 정수 배열에서 최대 합을 가진 연속 부분 배열의 합을 계산합니다.
 * 완전탐색 방법을 사용하여 이 문제를 해결합니다.
 *
 * @param {number[]} nums - 정수 배열
 * @return {number} 최대 부분 배열의 합
 */
 function maxSubArrayBruteForce(nums) {
    let maxSum = Number.MIN_SAFE_INTEGER; // 가능한 가장 작은 수로 초기화

    // 모든 가능한 부분 배열에 대해 반복
    for (let start = 0; start < nums.length; start++) {
        for (let end = start; end < nums.length; end++) {
            let currentSum = 0;
            // start부터 end까지의 합 계산
            for (let i = start; i <= end; i++) {
                currentSum += nums[i];
            }
            // 최대합 갱신
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
}

// 테스트 케이스
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArrayBruteForce(nums)); // 출력: 6
