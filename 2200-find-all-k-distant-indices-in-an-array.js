const findKDistantIndices = function(nums, key, k) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if ((Math.abs(i - j) <= k) && (nums[j] === key)) set.add(i);
        }
    }
    return [...set.values()];
};

console.log(findKDistantIndices([3,4,9,1,3,9,5],  9, 1)) // [1,2,3,4,5,6]
console.log(findKDistantIndices([2,2,2,2,2],  2, 2)) // [0,1,2,3,4]