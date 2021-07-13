/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 1. 使用 sort 函数
var findKthLargest = function (nums, k) {
    // nums.sort((a, b) => parseInt(b) - parseInt(a));
    // return nums[k - 1];
    return nums.sort((a, b) => b - a)[k - 1];
};

// 2. 冒泡排序
var findKthLargest = function (nums, k) {
    for (let i = 0; i < nums.length; i++) {
        let flag = false;
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] < nums[j + 1]) {
                const temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
                flag = true;
            }
        }
        if (!flag) {
            break;
        }
    }
    return nums[k - 1];
};

// 3.快排
let quickSort = (arr) => {
    quick(arr, 0, arr.length - 1);
};

let quick = (arr, left, right) => {
    let index;
    if (left < right) {
        // 划分数组
        index = partition(arr, left, right);
        if (left < index - 1) {
            quick(arr, left, index - 1);
        }
        if (index < right) {
            quick(arr, index, right);
        }
    }
};

// 一次快排
let partition = (arr, left, right) => {
    // 取中间项为基准
    var datum = arr[Math.floor(Math.random() * (right - left + 1)) + left],
        i = left,
        j = right;
    // 开始调整
    while (i <= j) {
        // 左指针右移
        while (arr[i] < datum) {
            i++;
        }
        // 右指针左移
        while (arr[j] > datum) {
            j--;
        }
        // 交换
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i += 1;
            j -= 1;
        }
    }
    return i;
};

var findKthLargest = function (nums, k) {
    quickSort(nums);
    return nums[nums.length - k];
};

// 3.堆排序
// 整个流程就是上浮下沉

// 自下而上构建一颗大顶堆
let buildMaxHeap = (nums, heapSize) => {
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
        maxHeapify(nums, i, heapSize);
    }
};
// 从左向右，自上而下的调整节点
let maxHeapify = (nums, i, heapSize) => {
    let l = i * 2 + 1;
    let r = i * 2 + 2;
    let largest = i;
    if (l < heapSize && nums[l] > nums[largest]) {
        largest = l;
    }
    if (r < heapSize && nums[r] > nums[largest]) {
        largest = r;
    }
    if (largest !== i) {
        // 进行节点调整
        swap(nums, i, largest);
        // 需要调整对被上次调整的影响的子树 继续调整下面的非叶子节点
        maxHeapify(nums, largest, heapSize);
    }
};

function swap(a, i, j) {
    let temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

var findKthLargest = function (nums, k) {
    let heapSize = nums.length;
    buildMaxHeap(nums, heapSize); // 构建好了一个大顶堆
    // 进行下沉 大顶堆是最大元素下沉到末尾
    for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
        swap(nums, i, 0);
        // 下沉后的元素不参与到大顶堆的调整
        heapSize -= 1;
        // 重新调整大顶堆
        maxHeapify(nums, 0, heapSize);
    }
    return nums[0];
};
