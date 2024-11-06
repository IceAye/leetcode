function canSortArray(nums) {
    let binaryArray = nums.map(item => [...item.toString(2)].reduce((acc, curr) => curr === "1" ? acc + 1 : acc, 0))

    let start = 0;

    for (let i = 0; i < nums.length;) {
        let j = i + 1;
        let min = nums[i];
        let max = nums[i];
        while (binaryArray[i] === binaryArray[j]) {
            max = Math.max(max, nums[j]);
            min = Math.min(min, nums[j]);
            j++;
        }
        if (start > min) return false;
        start = max;
        i = j;
    }
    return true
}


console.log(canSortArray([8,4,2,30,15])) // true
console.log(canSortArray([1,2,3,4,5])) // true
console.log(canSortArray([3,16,8,4,2])) // false
console.log(canSortArray( [7,13,  18,17,  8,16,2])) // false
console.log(canSortArray( [15,  128,1,  255])) // false
console.log(canSortArray( [174, 175, 234, 188])) // true