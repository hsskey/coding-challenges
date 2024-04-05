/**
 * Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 */

/**
 * @param {string} s
 * @return {number}
 *  * @풀이결과 A | B | C (선택하신 결과를 여기에 기입하세요)
 * @반복횟수 n (실제 반복한 횟수를 여기에 기입하세요)
 */
 var lengthOfLongestSubstring = function(s) {
    const charSet = new Set()
    let left  = 0
    let result = 0

    for(let right = 0; right < s.length; right++) {
        while(charSet.has(s[right])) {
            charSet.delete(s[left])
            left += 1
        }

        charSet.add(s[right])
        result = Math.max(result, right - left + 1)
    }
    return result
};
// const s = "abcabcbb"
const s = "abcabcbb"
console.log(lengthOfLongestSubstring(s))