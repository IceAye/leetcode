const isPossibleToSplit = function(nums) {
    const count = new Map ();
    for (const num of nums) {
        count.set(num, count.get(num) + 1 || 1);
        if (count.get(num) > 2) return false;
    }
    return true;
};

console.log(isPossibleToSplit([1,1,2,2,3,4])) // true
console.log(isPossibleToSplit([1,1,1,1])) // false