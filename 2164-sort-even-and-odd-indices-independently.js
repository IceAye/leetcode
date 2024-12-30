const sortEvenOdd = function (nums) {
    let odds = [];
    let evens = [];
    for (let i = 0; i < nums.length; i++) {
        i % 2 === 0 ? evens.push(nums[i]) : odds.push(nums[i]);
    }
    odds.sort((a, b) => b - a);
    evens.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < odds.length; i++) {
        result.push(evens[i], odds[i]);
    }
    if (evens.length > odds.length) result.push(evens.at(-1));
    return result;
};

console.log(sortEvenOdd([4, 1, 2, 3])); // [2,3,4,1]
console.log(sortEvenOdd([2, 1])); // [2,1]
console.log(sortEvenOdd([4, 1, 2, 3, 10])); // [2,3,4,1,10]
console.log(
    sortEvenOdd([4, 1, 2, 3, 10, 34, 55, 75, 23, 12, 65, 12, 1, 5, 3, 2]),
); // [2,3,4,1,10]