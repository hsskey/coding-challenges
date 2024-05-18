function solution(n, k) {
    const nStr = n.toString();
    const kInt = parseInt(k, 10);
    let remainder = 0;
    let count = 0;

    // 나머지를 저장하여 이전에 나온 나머지를 확인
    const remainderSet = new Set();

    while (count <= kInt) {
        count++;
        for (let i = 0; i < nStr.length; i++) {
            remainder = (remainder * 10 + parseInt(nStr[i], 10)) % kInt;
        }

        // 나머지가 0이면 현재 반복 횟수를 반환
        if (remainder === 0) {
            return count;
        }

        // 이미 나온 나머지라면 무한 루프에 빠지므로 종료
        if (remainderSet.has(remainder)) {
            return -1;
        }

        remainderSet.add(remainder);
    }

    return -1;
}

// 테스트 케이스
console.log(solution(22, 9));      // 9
console.log(solution(25, 15));     // 3
console.log(solution(1, 1));       // 1
console.log(solution(12, 7));      // 6
console.log(solution(9, 2));       // -1
console.log(solution(999, 3));     // 1
console.log(solution(123456789, 98765)); // -1
