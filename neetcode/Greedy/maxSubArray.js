/**
 * 이 함수는 주어진 정수 배열에서 최대 합을 가진 연속 부분 배열의 합을 계산합니다.
 * Kadane's Algorithm을 사용하여 O(n) 시간 복잡도로 문제를 해결합니다.
 * /**
 * @풀이결과 C (선택하신 결과를 여기에 기입하세요)
 * @반복횟수 1 (실제 반복한 횟수를 여기에 기입하세요)
 *
 * @param {number[]} nums - 정수 배열
 * @return {number} 최대 부분 배열의 합
 */
 var maxSubArray = function(nums) {
    // maxSub는 지금까지 발견된 최대 부분합을 저장합니다.
    // curSum은 현재 탐색 중인 부분 배열의 합을 추적합니다.
    let maxSub = nums[0];
    let curSum = 0;

    // 배열의 각 원소에 대해 반복
    for (let n of nums) {
        // curSum이 음수가 되면, 이후의 원소에 대해 새로운 부분 배열을 시작합니다.
        if (curSum < 0) {
            curSum = 0;
        }
        // 현재 원소를 curSum에 추가
        curSum += n;
        // maxSub를 현재의 curSum과 비교하여 더 큰 값을 maxSub에 저장
        maxSub = Math.max(maxSub, curSum);
    }
    // 최대 부분합 반환
    return maxSub;
};

// 테스트 케이스 실행
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // 출력: 6 (부분 배열 [4, -1, 2, 1]의 합)
