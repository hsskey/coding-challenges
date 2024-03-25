/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    let rows = Array.from({ length: 9 }, () => new Set()); // 행: 스도쿠 보드의 각 행에 있는 숫자들을 추적
    let cols = Array.from({ length: 9 }, () => new Set()); // 열: 스도쿠 보드의 각 열에 있는 숫자들을 추적
    let boxes = Array.from({ length: 9 }, () => new Set()); // boxes: 스도쿠 보드를 3x3 크기의 9개의 서브 그리드로 나눌 때, 각 서브 그리드에 있는 숫자들을 추적
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            // 숫자가 '.'이 아닌 경우, 해당 숫자가 이미 행, 열, 또는 서브 그리드에 존재하는지 검사
            if (num !== '.') {
                // boxIndex = (행 번호 / 3) * 3 + (열 번호 / 3)
                let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
                    return false;
                }
                rows[i].add(num);
                cols[j].add(num);
                boxes[boxIndex].add(num);
            }
        }
    }

    return true;
};

const board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
console.log(isValidSudoku(board))