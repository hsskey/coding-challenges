/**
 * 
* 
정수 배열 nums가 주어졌을 때, answer[i]가 nums[i]를 제외한 nums의 모든 요소의 곱과 같도록 배열 답을 반환합니다.

nums의 접두사 또는 접미사의 곱은 32비트 정수에 맞도록 보장됩니다.

나누기 연산을 사용하지 않고 O(n) 시간 내에 실행되는 알고리즘을 작성해야 합니다.

 

예제 1:

입력: nums = [1,2,3,4]
Output: [24,12,8,6]
예제 2:

입력: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    const n = nums.length;
    const leftProducts = new Array(n).fill(1);
    const rightProducts = new Array(n).fill(1);
    const answer = new Array(n);

    for (let i = 1; i < n; i++) {
        leftProducts[i] = nums[i - 1] * leftProducts[i - 1];
    }

    for (let i = n - 2; i >= 0; i--) {
        rightProducts[i] = nums[i + 1] * rightProducts[i + 1];
    }

    for (let i = 0; i < n; i++) {
        answer[i] = leftProducts[i] * rightProducts[i];
    }

    return answer;
};



console.log(productExceptSelf([1,2,3,4]))