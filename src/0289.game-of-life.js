/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// 复制原数组进行模拟
var gameOfLife = function (board) {
    const neighbors = [0, 1, -1];
    const m = board.length;
    const n = board[0].length;
    const copyBoard = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            copyBoard[i][j] = board[i][j];
        }
    }
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            let liveNeighbors = 0;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (!(neighbors[i] === 0 && neighbors[j] === 0)) {
                        let r = row + neighbors[i];
                        let c = col + neighbors[j];
                        if ((r >= 0 && r < m) && (c >= 0 && c < n) && copyBoard[r][c] === 1) {
                            liveNeighbors += 1;
                        }
                    }
                }
            }
            if ((liveNeighbors < 2 || liveNeighbors > 3) && copyBoard[row][col] === 1) {
                board[row][col] = 0;
            }
            if (liveNeighbors === 3 && copyBoard[row][col] === 0) {
                board[row][col] = 1;
            }
        }
    }
};

// 原地修改
// 如果当前细胞为活细胞，则周围八个位置的细胞都会被“影响”，所以将这八个细胞 +10
// 用十位表示周围的活细胞数量，最后再处理更新每一个细胞的状态
var gameOfLife = function (board) {
    const neighbors = [0, 1, -1];
    const m = board.length;
    const n = board[0].length;
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (board[row][col] % 10 === 1) {
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        if (!(neighbors[i] === 0 && neighbors[j] === 0)) {
                            let r = row + neighbors[i];
                            let c = col + neighbors[j];
                            if ((r >= 0 && r < m) && (c >= 0 && c < n)) {
                                board[r][c] += 10;
                            }
                        }
                    }
                }
            }
        }
    }
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            let liveNeighbors = Math.floor(board[row][col] / 10);
            let cell = board[row][col] % 10;
            if (cell === 1 && (liveNeighbors < 2 || liveNeighbors > 3)) {
                board[row][col] = 0;
            } else if (
                (cell === 0 && liveNeighbors === 3) ||
                (cell === 1 && (liveNeighbors === 2 || liveNeighbors === 3))
            ) {
                board[row][col] = 1;
            } else {
                board[row][col] = 0;
            }
        }
    }
};