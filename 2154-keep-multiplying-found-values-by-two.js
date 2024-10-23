let findFinalValue = function(nums, original) {
    let set = new Set(nums)
    if (!set.has(original)) return original
    return findFinalValue(nums, original * 2)
};

console.log(findFinalValue([5,3,6,1,12], 3)); // 24
console.log(findFinalValue([2,7,9], 4)); // 4