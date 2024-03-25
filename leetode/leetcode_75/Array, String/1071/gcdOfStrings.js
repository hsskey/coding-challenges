/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
 var gcdOfStrings = function(str1, str2) {
    // 기본 검사: 두 문자열을 합친 결과가 같은지 확인
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    
    // 유클리드 호제법으로 두 문자열 길이의 최대공약수(GCD)를 찾음
    const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
    
    // 두 문자열 길이의 최대공약수 길이의 문자열을 반환
    return str1.substring(0, gcd(str1.length, str2.length));
};
