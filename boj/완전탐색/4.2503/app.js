const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : `${__dirname}/input.txt`;
const input = fs.readFileSync(filePath).toString().split("\n").map((item) => item.split(" "));

const N = parseInt(input.shift(), 10);

let answer = 0;

for (let a = 1; a <= 9; a++) {
    for (let b = 1; b <= 9; b++) { // b의 시작 범위를 1로 수정
        for (let c = 1; c <= 9; c++) { // c의 시작 범위를 1로 수정
            if (a === b || b === c || a === c) continue;
            let cnt = 0;

            for (let i = 0; i < N; i++) {
                const [number, strike, ball] = input[i];
                let strike_count = 0, ball_count = 0;

                // 스트라이크 계산
                if (a === parseInt(number[0])) strike_count++;
                if (b === parseInt(number[1])) strike_count++;
                if (c === parseInt(number[2])) strike_count++;

                // 볼 계산
                if (a === parseInt(number[1]) || a === parseInt(number[2])) ball_count++;
                if (b === parseInt(number[0]) || b === parseInt(number[2])) ball_count++;
                if (c === parseInt(number[0]) || c === parseInt(number[1])) ball_count++;

                if (strike == strike_count && ball == ball_count) {
                    cnt++;
                } else {
                    // 매칭 실패 시 즉시 반복문 탈출
                    break;
                }
            }

            if (cnt === N) {
                answer++;
            }
        }
    }
}

console.log(answer);
