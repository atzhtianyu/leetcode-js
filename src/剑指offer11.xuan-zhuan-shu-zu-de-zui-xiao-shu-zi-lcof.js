/**
 * @param {number[]} numbers
 * @return {number}
 */
// ζ΄ε
var minArray = function (numbers) {
    let res = Infinity;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < res) {
            res = numbers[i];
        }
    }
    return res;
};

// δΊε
var minArray = function (numbers) {
    let low = 0;
    let high = numbers.length - 1;
    while (low < high) {
        const pivot = low + Math.floor((high - low) / 2);
        if (numbers[pivot] < numbers[high]) {
            high = pivot;
        } else if (numbers[pivot] > numbers[high]) {
            low = high + 1;
        } else {
            high--;
        }
    }
    return numbers[low];
}