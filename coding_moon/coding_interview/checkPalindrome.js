/**
 * 팰린드롬 회문 ( Palindrome )
 * - 앞으로 & 뒤로 읽었을 때 같은 문자열
 * - level, eye, hannah
 */


// 투포인터 풀이
function checkPalindrome(str) {
    const middle = Math.floor(str.length / 2)

    for(let i = 0; i < middle ; i++) {
        if(str[i] !== str.charAt(str.length - 1 - i)) {
            return false
        }
    }

    return true
}
console.log(checkPalindrome('eye'))
console.log(checkPalindrome('hannah'))
console.log(checkPalindrome('abbc'))
/**
 * 추가 문자열 활용(reverse)
function checkPalindrome(str) {
    let reversed = ''

    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }

    if(str !== reversed) {
        return false 
    }
    return true
}

console.log(checkPalindrome('eye'))
 *
 */