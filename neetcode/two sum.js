/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const d = {}

    for(let i = 0; i < nums.length; i++) {
        if(!(target - nums[i] in hashTable)) {
            d[nums[i]] = i
        } else {
            return [d[target - nums[i]], i]
        }
    }
 };

//  var twoSum = function(nums, target) {
//     const hashTable = {}
//     const result = []
//     for(let i = 0; i < nums.length; i++) {
//         hashTable[nums[i]] = i 
//     }

//     for(let i = 0; i < nums.length; i++) {
//         const pair = target - nums[i]
        
//         if(pair in hashTable) {
//             result.push(i, hashTable[pair])
//             return result
//         }
//     }
// };

/**
 * 
 * Example 1:
        Input: nums = [2,7,11,15], target = 9
        Output: [0,1]
        Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
    Example 2:
        Input: nums = [3,2,4], target = 6
        Output: [1,2]
    Example 3:
        Input: nums = [3,3], target = 6
        Output: [0,1]
 */