/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let words = Array.from(word);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(board, words, i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};

var dfs = function (board, words, i, j, k) {
    // 直接在这里解决越界的问题
    if (i >= board.length || i < 0 || j >= board[0].length || j < 0 || board[i][j] !== words[k]) {
        return false;
    }
    if (k === words.length - 1) {
        return true;
    }
    board[i][j] = "\0";
    let res =
        dfs(board, words, i + 1, j, k + 1) ||
        dfs(board, words, i - 1, j, k + 1) ||
        dfs(board, words, i, j + 1, k + 1) ||
        dfs(board, words, i, j - 1, k + 1);
    board[i][j] = words[k];
    return res;
}