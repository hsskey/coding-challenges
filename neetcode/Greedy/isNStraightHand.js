var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0) return false;  // 빠른 반환: 총 카드 수가 groupSize의 배수가 아니면 false
    
    hand.sort((a, b) => a - b);  // 카드 정렬
    
    const countMap = new Map();
    for (const card of hand) {
        countMap.set(card, (countMap.get(card) || 0) + 1);  // 카드 빈도 계산
    }
    
    for (const card of hand) {
        if (countMap.get(card) > 0) {
            for (let i = 0; i < groupSize; i++) {
                const currentCard = card + i;
                if (!countMap.has(currentCard) || countMap.get(currentCard) === 0) {
                    return false;  // 필요한 카드가 없거나 빈도가 0이면 false
                }
                countMap.set(currentCard, countMap.get(currentCard) - 1);  // 카드 빈도 감소
            }
        }
    }
    
    return true;  // 모든 검증을 통과하면 true 반환
};
