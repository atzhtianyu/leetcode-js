/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
// 网易雷火笔试
var getHint = function (secret, guess) {
    const len = secret.length;
    let hash = Array(10).fill(0), m = n = 0;
    for (let i = 0; i < len; i++) {
        if (secret[i] === guess[i]) {
            m++;
        } else {
            if (hash[secret[i]]++ < 0) n++;
            if (hash[guess[i]]-- > 0) n++;
        }
    }
    return `${m}A${n}B`;
};
