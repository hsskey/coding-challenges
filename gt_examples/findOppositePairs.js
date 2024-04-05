function findOppositePairs(arr) {
    const map = new Map();

    // 배열 순회하면서 맵 구성
    arr.forEach(num => {
        const key = Math.abs(num);
        if (!map.has(key)) {
            map.set(key, {pos: 0, neg: 0});
        }
        if (num > 0) {
            map.get(key).pos += 1;
        } else if (num < 0) {
            map.get(key).neg += 1;
        }
    });
    map
    // 각 키에 대해 양수와 음수 중 더 적은 개수를 합산
    let count = 0;
    map.forEach(({pos, neg}) => {
        count += Math.min(pos, neg);
    });


    return count;
}

// 예제 입력
const arr = [1, -1, 2, 3, -3];
console.log(findOppositePairs(arr)); // 예제 출력: 2
