/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 多次反转
var reverse = function (nums, i, j) {
    while (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        ++i;
        --j;
    }
};

var rotate = function (nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};

// 临时数组
var rotate = function (nums, k) {
    k %= nums.length;
    const n = nums.length;
    const newArray = nums.slice(n - k, n);
    for (let i = n - k - 1; i >= 0; i--) {
        nums[i + k] = nums[i];
    }
    for (let i = 0; i < k; i++) {
        nums[i] = newArray[i];
    }
};

// API
var rotate = function (nums, k) {
    nums.splice(0, 0, ...nums.splice(-(k %= nums.length), k));
};

// 拼接 切割
var rotate = function (nums, k) {
    const n = nums.length;
    k %= n;
    nums.push(...nums);
    nums.splice(0, n - k);
    nums.splice(nums.length - k, k);
};

// 环形旋转
var rotate = function (nums, k) {
    let hold = nums[0];
    let index = 0;
    let length = nums.length;
    let visited = [];
    for (let i = 0; i < length; i++) {
        index = (index + k) % length;
        if (visited[index]) {
            // 如果访问过，再次访问的话，会出现原地打转的现象，
            // 不能再访问当前元素了，我们直接从他的下一个元素开始
            index = (index + 1) % length;
            hold = nums[index];
            i--;
        } else {
            // 把当前值保存在下一个位置，保存之前要把下一个位置的
            // 值给记录下来
            visited[index] = true;
            let temp = nums[index];
            nums[index] = hold;
            hold = temp;
        }
    }
}
