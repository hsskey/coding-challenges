/**
 * 문제풀이 접근 방법
 * - input = [100, 200, 50, 30, 150, 250]
 * - 두 가지 변수 초기화
 * a. maxProfit = 0
 * b. minPrice = input[0]
 * - input 배열에 반복문 실행
 * a. 매회의 반복마다 조건문 걸기 (현재까지 가장 저렴한 구입가격과 현재의 가격을 비교)
 * b. 두가지 결정
 *      현재의 가격이 minBuyPrice 보다 클때(minBuyPrice < currentPrice)
 *      -> 수익발생, maxProfit 변수값 업데이트
 *      현재의 가격이 minBuyPrice 보다 작을때(minBuyPrice > currentPrice)
 * - 반복문 종료후 maxProfit 값 리턴
 */

/**
 * 
 * @param {Number[]} prices
 */
function maxProfit(prices) {
    let maxProfit = 0
    let minBuyPrice = prices[0]

    for(let price of prices) {
        if(minBuyPrice < price) {
            maxProfit = Math.max(maxProfit, price - minBuyPrice)
        } else {
            minBuyPrice = price
        }
    }

    // for(let i = 0; i < prices.length; i ++) {
    //     const currentPrice = prices[i]
    //     if(minBuyPrice < currentPrice) {
    //         maxProfit = currentPrice - minBuyPrice
    //     }

    //     if(minBuyPrice > currentPrice) {
    //         minBuyPrice = currentPrice
    //     }
    // }

    return maxProfit
}

console.log(maxProfit([100, 200, 50, 30, 150, 250])) // 220
console.log(maxProfit([100, 50, 30, 20, 10])) // 0