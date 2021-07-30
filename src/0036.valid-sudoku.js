/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const row = [],
        col = [],
        block = [];
    for (let i = 0; i < 9; i++) {
        row[i] = [];
        col[i] = [];
        block[i] = [];
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== ".") {
                let num = board[i][j];
                let blockIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (
                    row[i].includes(num) ||
                    col[j].includes(num) ||
                    block[blockIndex].includes(num)
                ) {
                    return false;
                } else {
                    row[i].push(num);
                    col[j].push(num);
                    block[blockIndex].push(num);
                }
            }
        }
    }
    return true;
}
