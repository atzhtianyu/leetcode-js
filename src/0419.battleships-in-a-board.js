/**
 * @param {character[][]} board
 * @return {number}
 */
// 读完这道题首先判断使用DFS，就像200题岛屿数量一样
// 但是仔细阅读题目，就可以发现这道题的限制条件比200题要多
// 在遍历的时候，只要关心X的右方或下方有没有X，如果有则不计数，因为接下来的遍历还会遇到战舰的其余部分，如果没有，证明这个X已经是战舰的最后一部分，计数+1
var countBattleships = function (board) {
    let ans = 0;
    const n = board.length,
        m = board[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (
                board[i][j] === "X" &&
                (i + 1 >= n || board[i + 1][j] === ".") &&
                (j + 1 >= m || board[i][j + 1] === ".")
            ) {
                ans++;
            }
        }
    }
    return ans;
};
