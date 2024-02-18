/**
 * 문자열 두개가 주어졌을때 이 둘이 서로 순열관계에 있는지 확인하는 메서드를 작성하라
 */

function checkPermutation(str1, str2) {
    const set1 = [...new Set(str1)]
    const set2 = [...new Set(str2)]

    if(set1.length === set2.length) {
        return true
    }

    return false
}

console.log(checkPermutation("a", "aab"), "false")
console.log(checkPermutation("aba", "abb"), "false")
console.log(checkPermutation("hooh", "oohh"), "true")
console.log(checkPermutation("aaabbbccc", "abcabcabc"), "true")
console.log(checkPermutation("abaa", "abba"), "true")