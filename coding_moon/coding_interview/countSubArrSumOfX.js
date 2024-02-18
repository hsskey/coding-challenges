function countSubArrSumOfX(arr, x) {
  let start = 0, end = 0, count = 0, currentSum = 0;

  while (end < arr.length) {
    // 현재 합에 end 포인터의 요소를 추가합니다.
    currentSum += arr[end];

    // 현재 합이 x보다 크거나 같을 때까지 start 포인터를 오른쪽으로 이동합니다.
    while (currentSum > x && start <= end) {
      currentSum -= arr[start];
      start++;
    }

    // 현재 합이 x와 같으면 카운트를 증가시킵니다.
    if (currentSum == x) {
      count++;
    }

    // end 포인터를 오른쪽으로 이동시킵니다.
    end++;
  }

  return count;
}

console.log(countSubArrSumOfX([1, 3, 6, 5, 2, 7, 9], 9));
