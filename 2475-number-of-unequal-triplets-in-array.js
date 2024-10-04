let unequalTriplets = function(nums) {
    let result = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j  = i + 1; j < nums.length - 1; j++) {
            if (nums[i] === nums[j]) continue;
            for (let k = j + 1; k < nums.length; k++) {
                if (nums[i] !== nums[k] && nums[j] !== nums[k]) result++
            }
        }
    }
    return result;
};

console.log(unequalTriplets([4,4,2,4,3]));
console.log(unequalTriplets([1,1,1,1,1]));
console.log(unequalTriplets([1,3,1,2,4]));
console.log(unequalTriplets([1,3,1,2,4,5]));
console.log(unequalTriplets([2,3,3]));
console.log(unequalTriplets([1,2,3]));