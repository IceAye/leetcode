const specialArray = function(nums) {
    let i = 0;
    while (i <= nums.length) {
        let count = 0;
        for (const num of nums) {
            if (num >= i) count++;
        }
        if (i === count) {
            return i;
        } else {
            i++
        }
    }
    return -1;
};

console.log(specialArray([3,5])) // 2
console.log(specialArray([0,0])) // -1
console.log(specialArray([0,4,3,0,4])) // 3
