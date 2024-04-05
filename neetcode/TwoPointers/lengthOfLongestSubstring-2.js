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
 * @풀이결과 C (선택하신 결과를 여기에 기입하세요)
 * @반복횟수 0 (실제 반복한 횟수를 여기에 기입하세요)
 */
 var lengthOfLongestSubstring = function(s) {
    let maxLen = 0; // 최대 길이를 저장할 변수
    let start = 0; // 현재 부분 문자열의 시작 인덱스
    let map = {}; // 문자의 인덱스를 저장할 맵

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // 만약 현재 문자가 이미 맵에 있고, 그 인덱스가 현재 부분 문자열의 시작 인덱스보다 크거나 같다면,
        // 중복 문자가 나타난 것이므로, 시작 인덱스를 중복 문자의 다음 위치로 갱신한다.
        if (map[char] !== undefined && map[char] >= start) {
            start = map[char] + 1;
        }

        map[char] = i; // 현재 문자의 인덱스를 맵에 저장한다.

        // 최대 길이를 갱신한다. 현재 인덱스(i)에서 시작 인덱스(start)를 뺀 값에 1을 더하면,
        // 현재까지의 중복 없는 부분 문자열의 길이가 된다.
        maxLen = Math.max(maxLen, i - start + 1);
    }

    return maxLen;
};
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("pwwk")); // 2