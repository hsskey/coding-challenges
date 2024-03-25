/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
    let mergedString = ""; // 최종 병합된 문자열을 저장할 변수 초기화
    let i = 0; // 반복문을 위한 인덱스 변수 초기화
    // 두 문자열 중 더 짧은 길이를 가진 문자열의 길이까지 반복
    while (i < word1.length && i < word2.length) {
        mergedString += word1[i] + word2[i]; // 교대로 문자 추가
        i++; // 인덱스 증가
    }
    // word1이 word2보다 길 경우, 남은 문자열 추가
    if (i < word1.length) {
        mergedString += word1.substring(i);
    }
    // word2가 word1보다 길 경우, 남은 문자열 추가
    if (i < word2.length) {
        mergedString += word2.substring(i);
    }
    return mergedString; // 최종 병합된 문자열 반환
};
