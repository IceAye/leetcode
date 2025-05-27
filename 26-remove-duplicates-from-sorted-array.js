const removeDuplicates = function (nums) {
    let l = 0, r = 1;
    while (r < nums.length) {
        while (nums[l] === nums[r] ) {
            r++;
        }
        l++;
        nums[l] = nums[r];
        if (nums[l] === undefined) break
    }
    return l || nums.length;
};

console.log(removeDuplicates([1,1,2])) // 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) // 5
console.log(removeDuplicates([1])) // 1
console.log(removeDuplicates([1,2])) // 2
console.log(removeDuplicates([-1,0,0,0,0,3,3])) // 3