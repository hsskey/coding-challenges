/**
 You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    let maxReach = 0; // 최대 도달 가능 인덱스 초기화
    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) {
            // 현재 인덱스가 최대 도달 가능 인덱스를 넘으면 도달 불가능
            return false;
        }
        maxReach = Math.max(maxReach, i + nums[i]); // 최대 도달 가능 인덱스 업데이트
        if (maxReach >= nums.length - 1) {
            // 마지막 인덱스에 도달하거나 넘으면 true 반환
            return true;
        }
    }
    // 배열 끝에 도달하지 못하면 false 반환
    return false;
};


console.log(canJump([2,5,0,0]))
console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))
console.log(canJump([2, 0]))
console.log(canJump([1,1,3]))