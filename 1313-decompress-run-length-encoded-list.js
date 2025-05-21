const decompressRLElist = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length - 1; i += 2) {
        let seq = new Array(nums[i]).fill(nums[i + 1]);
        result.push(...seq);
    }
    return result;
};

console.log(decompressRLElist([1,2,3,4])) // [2,4,4,4]
console.log(decompressRLElist([1,1,2,3])) // [1,3,3]