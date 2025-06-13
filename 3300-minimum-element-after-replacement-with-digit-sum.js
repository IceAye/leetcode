const minElement = function(nums) {
    return Math.min(...nums.map(num => [...num.toString()].reduce((acc, curr) => acc + +curr, 0)));
};

console.log(minElement([10,12,13,14])) // 1
console.log(minElement([1,2,3,4])) // 1
console.log(minElement([999,19,199])) // 10