/**
 * 
 *  Example 1:
    Input: nums = [100,4,200,1,3,2]
    Output: 4
    Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
    
    Example 2:
    Input: nums = [0,3,7,2,5,8,4,6,0,1]
    Output: 9
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    const numSet = new Set(nums); // 중복 제거 및 O(1) 조회를 위해 Set 사용
    let longestStreak = 0;
    numSet
    for (let num of numSet) {
        // 현재 숫자가 연속 시퀀스의 시작점인지 확인
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // 현재 숫자로부터 시작하는 연속 시퀀스의 길이 찾기
            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            // 가장 긴 연속 시퀀스 업데이트
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};

console.log(longestConsecutive([100,4,200,1,3,2]))