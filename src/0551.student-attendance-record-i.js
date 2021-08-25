/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    let absence = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] ==='A') {
            absence++;
        }
        if (absence > 1 && (s[i] === 'L' && s[i - 1] === 'L' && s[i - 2] === 'L')) {
            return false;
        }
    }
    return true;
};

// 更为严谨
var checkRecord = function(s) {
    let numA = 0, lates = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === 'A') {
            numA++;
        }
        if (c === 'L') {
            lates++;
        } else {
            lates = 0;
        }
        if (numA > 1 || lates === 3) {
            return false;
        }
    }
    return true;
};