// ❓ DESCRIPTION:
// You are given two integer arrays nums1 and nums2. You are tasked to implement a data structure that supports queries of two types:
//
// Add a positive integer to an element of a given index in the array nums2.
// Count the number of pairs (i, j) such that nums1[i] + nums2[j] equals a given value (0 <= i < nums1.length and 0 <= j < nums2.length).
// Implement the FindSumPairs class:
//
// FindSumPairs(int[] nums1, int[] nums2) Initializes the FindSumPairs object with two integer arrays nums1 and nums2.
// void add(int index, int val) Adds val to nums2[index], i.e., apply nums2[index] += val.
// int count(int tot) Returns the number of pairs (i, j) such that nums1[i] + nums2[j] == tot.
// 📅 (daily question 2025 July, 6th):

// ✅ SOLUTION (84.21% runtime, 68.42% memory):
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

// 📌 TESTCASE:
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
