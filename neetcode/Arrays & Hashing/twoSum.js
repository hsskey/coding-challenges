/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const map = new Map()
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if(map.has(target - num)) {
            return [i, map.get(target-num)]
        }
        map.set(num, i)
    }
};
nums = [2,7,11,15], target = 9
console.log(twoSum(nums, target))