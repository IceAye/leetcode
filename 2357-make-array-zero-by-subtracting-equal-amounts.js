let minimumOperations = function(nums) {
    let set = new Set(nums);
    return set.has(0) ? set.size - 1 : set.size;
};

console.log(minimumOperations([1,5,0,3,5]))
console.log(minimumOperations([0]))
