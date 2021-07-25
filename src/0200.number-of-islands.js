/**
 * @param {character[][]} grid
 * @return {number}
 */
// dfs
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

// bfs
var numIslands = function (grid) {
    function bfs(queue, grid) {
        const dirs = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ];
        while (queue.length) {
            const cur = queue.shift();
            for (const dir of dirs) {
                const x = cur[0] + dir[0];
                const y = cur[1] + dir[1];
                if (
                    x < 0 ||
                    x >= grid.length ||
                    y < 0 ||
                    y >= grid[0].length ||
                    grid[x][y] !== "1"
                ) {
                    continue;
                }
                grid[x][y] = '0';
                queue.push([x, y]);
            }
        }
    }
    let count = 0;
    const queue = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                grid[i][j] = '0';
                queue.push([i, j]);
                bfs(queue, grid);
            }
        }
    }
    return count;
};
