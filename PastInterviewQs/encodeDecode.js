/**
 * 문자열 압축 함수
 * @param {string} s - 원본 문자열
 * @return {string} - 압축된 문자열
 */
 function encode(s) {
    let result = '';
    let count = 1;
    for (let i = 1; i <= s.length; i++) {
        if (s[i] === s[i-1]) {
            count++;
        } else {
            result += s[i-1] + count;
            count = 1; // 카운터 초기화
        }
    }
    return result;
}

/**
 * 문자열 해제 함수
 * @param {string} s - 압축된 문자열
 * @return {string} - 원본 문자열
 */
function decode(s) {
    let result = '';
    let numStr = ''; // 숫자를 문자열로 처리하기 위한 변수
    for (let char of s) {
        if (isNaN(char)) { // 숫자가 아니면
            if (numStr !== '') { // 숫자 문자열이 있으면 처리
                result += result[result.length - 1].repeat(parseInt(numStr) - 1);
                numStr = ''; // 숫자 문자열 초기화
            }
            result += char; // 현재 문자 추가
        } else { // 숫자이면
            numStr += char; // 숫자 문자열에 추가
        }
    }
    // 마지막으로 처리되지 않은 숫자 문자열 처리
    if (numStr !== '') {
        result += result[result.length - 1].repeat(parseInt(numStr) - 1);
    }
    return result;
}

// 예시 테스트
console.log(encode("aaabbcc")); // "a3b2c2"
console.log(decode("a3b2c2")); // "aaabbcc"

console.log(encode("abcd")); // "a1b1c1d1"
console.log(decode("a1b1c1d1")); // "abcd"

console.log(encode("a")); // "a1"
console.log(decode("a1")); // "a"
