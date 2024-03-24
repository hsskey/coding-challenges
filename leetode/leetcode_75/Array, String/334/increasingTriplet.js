/**
 * Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
Example 2:

Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.
Example 3:

Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 

Constraints:

1 <= nums.length <= 5 * 105
-231 <= nums[i] <= 231 - 1
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var increasingTriplet = function(nums) {
    let lowest = Number.MAX_SAFE_INTEGER; // 최소값을 아직만나지않았다는 의미
    let secondLowest = Number.MAX_SAFE_INTEGER; // 최소값을 아직만나지않았다는 의미
    
    for (let num of nums) {
        if (num <= lowest) {
            lowest = num; // 가장 낮은 값을 찾음
        } else if (num <= secondLowest) {
            secondLowest = num; // 두 번째로 낮은 값을 찾음
        } else {
            // 현재 숫자가 lowest와 secondLowest보다 크면, 조건을 만족하는 삼중항을 찾은 것임
            return true;
        }
    }
    
    // 조건을 만족하는 삼중항을 찾지 못한 경우
    return false;

};

// const nums = [5,4,3,2,1]
const nums = [1,2,3]
console.log(increasingTriplet(nums))