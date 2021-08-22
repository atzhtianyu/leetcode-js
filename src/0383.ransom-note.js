/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// 利用 indexOf
var canConstruct = function (ransomNote, magazine) {
    const len = ransomNote.length;
    for (let i = 0; i < len; i++) {
        const c = ransomNote[i];
        if (magazine.indexOf(c) === -1) {
            return false;
        }
        magazine = magazine.replace(c, '');
    }
    return true;
};

