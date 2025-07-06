/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
let FindSumPairs = function(nums1, nums2) {
    this.nums1 = nums1;
    this.nums2 = nums2;

    this.freq = new Map();

    for (const num of this.nums2) {
        this.freq.set(num, this.freq.get(num) + 1 || 1);
    }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    const oldVal = this.nums2[index];
    this.freq.set(oldVal, this.freq.get(oldVal) - 1);
    this.nums2[index] += val;

    const newVal = this.nums2[index];
    this.freq.set(newVal, this.freq.get(newVal) + 1 || 1);
};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
    let result = 0;

    for (const num of this.nums1) {
        const target = tot - num;
        result += this.freq.get(target) || 0;
    }

    return result;
};


let obj = new FindSumPairs([1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4])
console.log(obj.count(7)) // 8
console.log(obj.add(3, 2))  // nums2 = [1,4,5,4,5,4]
console.log(obj)
console.log(obj.count(8)) // 2
console.log(obj.count(4)) // 1
console.log(obj.add(0, 1)) // nums2 = [2,4,5,4,5,4]
console.log(obj)
console.log(obj.add(1, 1)) // nums2 = [2,5,5,4,5,4]
console.log(obj)
console.log(obj.count(7)) // 11
