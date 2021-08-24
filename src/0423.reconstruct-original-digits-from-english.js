/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
    const count = new Array(26 + "a".charCodeAt()).fill(0);
    for (let i = 0; i < s.length; i++) {
        count[s[i].charCodeAt()]++;
    }
    const out = new Array(10).fill(0);
    out[0] = count["z".charCodeAt()];
    out[2] = count["w".charCodeAt()];
    out[4] = count["u".charCodeAt()];
    out[6] = count["x".charCodeAt()];
    out[8] = count["g".charCodeAt()];
    out[3] = count["h".charCodeAt()] - out[8];
    out[5] = count["f".charCodeAt()] - out[4];
    out[7] = count["s".charCodeAt()] - out[6];
    out[9] = count["i".charCodeAt()] - out[5] - out[6] - out[8];
    out[1] = count["n".charCodeAt()] - out[9] - out[7];
    let output = [];
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < out[i]; j++) {
            output.push(i);
        }
    }
    return output.join("");
};

// 题解区正则匹配
var originalDigits = function (s) {
    let res = [],
        match = (char) => (s.match(new RegExp(char, "g")) || []).length;

    res[0] = match("z");
    res[2] = match("w");
    res[4] = match("u");
    res[6] = match("x");
    res[8] = match("g");
    res[3] = match("h") - res[8];
    res[1] = match("o") - res[0] - res[2] - res[4];
    res[5] = match("f") - res[4];
    res[7] = match("v") - res[5];
    res[9] = match("i") - res[5] - res[6] - res[8];

    return res.reduce(
        (str, times, num) => str + num.toString().repeat(times),
        ""
    );
};
