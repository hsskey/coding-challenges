/** 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let preffix = ""
    
    if(strs === null || strs.length === 0) {
    
        return preffix
    }

    for(let i = 0; i < strs[0].length; i++) {
        // 현재 첫글자를 캐싱
        const currentChar = strs[0][i]

        for(let j = 1; j < strs.length; j++) {
            if(strs[j][i] !== currentChar) {
                return preffix
            }
            console.log(strs[j][i])
        }
        // 수직으로 내려왔을때  
        preffix = preffix + currentChar
    }
    return preffix     
};

console.log(longestCommonPrefix(["flower","flow","flight"]))