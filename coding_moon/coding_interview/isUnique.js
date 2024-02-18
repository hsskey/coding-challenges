/**
 * 문자열이 주어졌을때, 이 문자열에 같은 문자가 중복되어 등장하는지 확인하는 알고리즘을 작성하라
 * 
 */
function isUnique(str) {
    const hashTable = {}

    for(char of str) {
        if(!(char in hashTable)) {
            hashTable[char] = 1
        } else {
            return false
        }
    }
    return true
}


/*테스트 케이스 */
console.log(isUnique(""), "true");
console.log(isUnique("abcd"), "true");
console.log(isUnique("abccd"), "false");
console.log(isUnique("bhjjb"), "false");
console.log(isUnique("mdjq"), "true");
console.log(isUnique("geez"), "false")