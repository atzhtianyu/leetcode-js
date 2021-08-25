/**
 * @param {string} moves
 * @return {boolean}
 */
// 直接模拟，简单粗暴
var judgeCircle = function (moves) {
    let x = 0, y = 0;
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === "U") {
            y += 1;
        } else if (moves[i] === "D") {
            y -= 1;
        } else if (moves[i] === "L") {
            x -= 1;
        } else if (moves[i] === "R") {
            x += 1;
        }
    }
    return x === 0 && y === 0;
};

// 另一种思路，内存消耗较大
var judgeCircle = function (moves) {
    return (
        moves.split("R").length === moves.split("L").length &&
        moves.split("U").length === moves.split("D").length
    );
};