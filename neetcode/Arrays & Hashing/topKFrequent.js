/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    const frequencyMap = new Map();
    
    // 각 숫자의 빈도수 계산
    nums.forEach(num => {
        if (frequencyMap.has(num)) {
            frequencyMap.set(num, frequencyMap.get(num) + 1);
        } else {
            frequencyMap.set(num, 1);
        }
    });

    // 빈도수를 기준으로 내림차순 정렬
    const sorted = Array.from(frequencyMap).sort((a, b) => b[1] - a[1]);

    // 상위 k개 원소 선택
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(sorted[i][0]);
    }

    return result;
};
