/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
    const rows = img.length;
    const cols = img[0].length;
    let ans = Array.from({ length: R }, () => []);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let count = 0;
            for (const x of [-1, 0, 1]) {
                for (const y of [-1, 0, 1]) {
                    if (isValid(i + x, j + y, rows, cols)) {
                        count++;
                        ans[i][j] += img[i + x][j + y];
                    }
                }
            }
            ans[i][j] = Math.floor(ans[i][j] / count);
        }
    }
    return ans;
};
const isValid = (r, c, rows, cols) => r < rows && r >= 0 && c < cols && c >= 0;
