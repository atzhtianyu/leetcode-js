/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    // 遍历二维数组，每当遇到1开启搜索模式，从当前节点向左/右/上/下，每次分别移动一步，如果是1则替换为0

    function dfs(grid, i, j) {
        // 递归终止条件
        if (
            i < 0 ||
            i >= grid.length ||
            j < 0 ||
            j >= grid[0].length ||
            grid[i][j] === "0"
        ) {
            return;
        }
        // 走过的标记为0
        grid[i][j] = "0";
        dfs(grid, i + 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i - 1, j);
        dfs(grid, i, j - 1);
    }
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                dfs(grid, i, j);
                count++;
            }
        }
    }
    return count;
};
