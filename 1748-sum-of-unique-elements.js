// ❓ DESCRIPTION:
// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in
// the array.  Return the sum of all the unique elements of nums.
//
// ✅ SOLUTION:
let sumOfUnique = function ( nums ) {
    let sum = 0;
    for (const num of nums) {
        if (nums.indexOf(num) === nums.lastIndexOf(num)) sum += num;
    }
    return sum;
};

console.log(sumOfUnique([1 , 2 , 3 , 2]));
console.log(sumOfUnique([1 , 1 , 1 , 1 , 1]));
console.log(sumOfUnique([1 , 2 , 3 , 4 , 5]));
