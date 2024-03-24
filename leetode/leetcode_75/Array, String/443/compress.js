/**
 * Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.

 

Example 1:

Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
Example 2:

Input: chars = ["a"]
Output: Return 1, and the first character of the input array should be: ["a"]
Explanation: The only group is "a", which remains uncompressed since it's a single character.
Example 3:

Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

 */

/**
 * @param {character[]} chars
 * @return {number}
 */
 var compress = function(chars) {
    let write = 0, read = 0;
    while (read < chars.length) {
        let char = chars[read];
        let count = 0;
        while (read < chars.length && chars[read] === char) {
            read++;
            count++;
        }
        chars[write++] = char; // 문자 기록
        if (count > 1) {
            // 길이가 1보다 크면, 그 길이를 문자열로 변환하여 저장
            let countStr = count.toString();
            for (let i = 0; i < countStr.length; i++) {
                chars[write++] = countStr[i];
            }
        }
    }
    return write; // 압축된 배열의 길이 반환

};
const chars = ["a","a","b","b","c","c","c"]
console.log(compress(chars))