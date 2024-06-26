function binarySearch(arr, target, start, end) {
    while(start <= end) {
        let mid = parseInt((start + end) / 2)
        // 찾은 경우 중간점 인덱스 반환
        if(arr[mid] === target) return mid
        // 중간점의 값보다 찾고자 하는 값이 작은 경우 왼쪽 확인
        else if(arr[mid] > target) end = mid -1
        // 중간점의 값보다 찾고자 하는 값이 큰 경우 오른쪽 확인
        else start = mid + 1
    }
    // 반복문을 통과했는데도 찾지못했다면 -1 리턴
    return -1
}


// n(원소의 개수)과 target(찾고자 하는 값)
let n = 10 // 배열의 길이
let target = 7
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

// 이진탐색 수행결과 출력
const result = binarySearch(arr, target, 0, n - 1)
if (result === -1) console.log('원소가 존재하지 않습니다.')
else console.log(`${result + 1} 번째 원소입니다.`)