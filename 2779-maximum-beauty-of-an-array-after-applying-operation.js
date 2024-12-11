function maximumBeauty(nums, k) {
    let sorted = nums.sort((a, b) => a - b);
    let n = sorted.length;
    let right = 0;
    let left = 0;

    while (right < n) {
        if (sorted[right] - sorted[left] > k * 2) {
            left++;
        }
        right++;
    }
    return right - left;
}

console.log(maximumBeauty([89,54,44,54], 5)) // 3
console.log(maximumBeauty([4,6,1,2], 2)) // 3
console.log(maximumBeauty([1,1,1,1], 10)) // 4
