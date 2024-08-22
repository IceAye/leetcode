let repeatedNTimes = function (nums) {
    let set = new Set();

    for (const num of nums) {
        if (set.has(num)) return num;
        set.add(num);
    }
};

console.log(repeatedNTimes([1 , 2 , 3 , 3]))
console.log(repeatedNTimes([2 , 1 , 2 , 5 , 3 , 2]))
console.log(repeatedNTimes([5 , 1 , 5 , 2 , 5 , 3 , 5 , 4]))