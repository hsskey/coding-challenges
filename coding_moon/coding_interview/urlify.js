/**
 * 주어진 문자열 내의 모든 공백을 '%20' 으로 바꾸는 메서드를 작성하라.
 * 문자열 끝에 추가로 필요한 문자들을 더할 수 있는 충분한 공간이 있다고 가정하라.
 * 공백을 포함하는 문자열의 길이도 함께 주어진다고 가정하라.

input: "Mr John Smith     ", 13 // 공백을 포함한 문자열의 길이
output: "Mr%20John%20Smith"
*/

function urlify(s, n) {
    /**
     *  ex) s = ' a b c ';
     *      n = 5
     * 1. 문자열 앞 공백제거
     * 2. 문자열 중간 공백치환
     * 3. 문자열 뒤 공백제거
     * */ 

    let output = ""
    let whitespace = s.length - n
    let actualStartIndex = 0

    let flag = false

    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ' && !flag) {
            actualStartIndex++
        } else {
            flag = true
        }
    }

    for(let i = actualStartIndex; i < s.length - (whitespace - actualStartIndex); i++) {
        output += s[i] === ' ' ? '%20' : s[i]
    }
    return output


}

// 테스트 케이스
console.log(
    urlify("Mr John Smith   ", 13) === "Mr%20John%20Smith",
    urlify(" Mr John Smith   ", 13) === "Mr%20John%20Smith",
    urlify("  Coding Moon ", 11) === "Coding%20Moon"
  );