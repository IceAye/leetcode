const findSubarrays = function (nums) {
    let map = new Map();
    for (let i = 0; i < nums.length - 1; i++) {
        let sum = nums[i] + nums[i + 1];
        if (map.has(sum)) {
            return true;
        }
        map.set(sum, 1);
    }
    return false;
};

console.log(findSubarrays([4, 2, 4])); // true
console.log(findSubarrays([1, 2, 3, 4, 5])); // false
console.log(findSubarrays([0, 0, 0])); // true
