// ❓ DESCRIPTION:
// You are given a 0-indexed integer array nums.
// The concatenation of two numbers is the number formed by concatenating their numerals.
// For example, the concatenation of 15, 49 is 1549.
// The concatenation value of nums is initially equal to 0. Perform this operation until nums becomes empty:
// If there exists more than one number in nums, pick the first element and last element in nums respectively and add the value of their concatenation to the concatenation value of nums, then delete the first and last element from nums.
// If one element exists, add its value to the concatenation value of nums, then delete it.
// Return the concatenation value of the nums.
//
// ✅ SOLUTION (runtime 91.2%):
let findTheArrayConcVal = function (nums) {
    let middle = Math.floor(nums.length / 2)
    let result = 0
    for (let i = 0; i < middle; i++){
        result += +(String(nums.at(i)) + String(nums.at(-1 - i)))
    }
    return nums.length % 2 === 1 ? result += nums[middle] : result;
};

// 📌 TESTCASE:
console.log(findTheArrayConcVal([7 , 52 , 2 , 4])) // 596
console.log(findTheArrayConcVal([5 , 14 , 13 , 8 , 12])) // 673
