let findMaxK = function (nums) {
    let array = [];
    for (const num of nums) {
        if (nums.includes(-num)) array.push(num);
    }
    return array.length > 0 ? Math.max(...array) : -1;
};