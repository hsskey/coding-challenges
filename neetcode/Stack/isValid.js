/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const stack = [];
    const mapping = { ')': '(', '}': '{', ']': '[' }; // 닫는 괄호를 키로, 여는 괄호를 값으로 하는 맵핑 객체
    for (let char of s) {
        if (char in mapping) {
            const topElement = stack.length === 0 ? '#' : stack.pop(); // 스택이 비어있지 않으면 pop, 비어있다면 임의의 값을 설정
            if (topElement !== mapping[char]) { // 매핑된 여는 괄호와 스택의 최상단 요소가 다르면 유효하지 않음
                return false;
            }
        } else {
            stack.push(char); // 여는 괄호인 경우 스택에 푸시
        }
    }

    return stack.length === 0; // 스택이 완전히 비어있어야 유효
};


const s = ")"
console.log(isValid(s))