/**
 * 
Input: ["neet","code","love","you"]
Output:["neet","code","love","you"]

Input: ["we","say",":","yes"]
Output: ["we","say",":","yes"]
 */
class Solution {
    /**
     * 문자열 목록을 단일 문자열로 인코딩합니다.
     * 
     * @param {string[]} strs - 인코딩할 문자열 목록입니다.
     * @returns {string} - 인코딩된 단일 문자열입니다.
     */
    encode(strs) {
        // 인코딩된 데이터를 저장할 빈 문자열을 초기화합니다.
        let encoded = '';
        // 입력 목록의 각 문자열을 반복합니다.
        for (let str of strs) {
            // 문자열의 길이와 콜론을 붙인 다음, 문자열 자체를 추가합니다.
            encoded += str.length + ':' + str;
        }
        // 인코딩된 문자열을 반환합니다.
        return encoded;
    }

    /**
     * 단일 문자열을 문자열 목록으로 디코딩합니다.
     * 
     * @param {string} str - 인코딩된 문자열입니다.
     * @returns {string[]} - 디코딩 후의 원래 문자열 목록입니다.
     */
    decode(str) {
        // 디코딩된 문자열을 저장할 배열을 초기화합니다.
        let decoded = [];
        // 인코딩된 문자열에서 현재 위치를 추적하기 위해 인덱스를 사용합니다.
        let i = 0;
        while (i < str.length) {
            // 길이 접두사와 실제 문자열을 구분하는 콜론을 찾습니다.
            let j = str.indexOf(':', i);
            // 다음 문자열의 길이를 추출합니다.
            let length = parseInt(str.substring(i, j));
            // 실제 문자열의 시작 부분으로 j를 콜론 다음으로 이동합니다.
            j += 1;
            // 찾은 길이를 사용하여 문자열을 추출합니다.
            decoded.push(str.substring(j, j + length));
            // 다음 길이 접두사의 시작 부분으로 인덱스를 이동합니다.
            i = j + length;
        }
        // 디코딩된 문자열 배열을 반환합니다.
        return decoded;
    }
}

const solution = new Solution()
const strs = ["we","say",":","yes"]
const encoded = solution.encode(strs)

console.log(encoded)
console.log(solution.decode(encoded))


console.log('2:we'.substring(0, 1))