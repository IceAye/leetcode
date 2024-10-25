// ❓ DESCRIPTION:
// Given an array of integers nums, half of the integers in nums are odd, and the other half are even.
// Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
// Return any answer array that satisfies this condition.
//
// ✅ SOLUTION 1:
let sortArrayByParityII = function(nums) {
    let result = [];
    let [evens, odds] = nums.reduce((acc, curr) => {
        acc[curr % 2].push(curr);
        return acc;
    }, [[], []])
    while (odds.length > 0) {
        result.push(evens.pop(), odds.pop())
    }
    return result
};

// ✅ SOLUTION 2:
let sortArrayByParityII = function(nums) {
    let result = [];
    let evenIndex = 0;
    let oddIndex = 1;
    for (const num of nums) {
        if (num % 2 === 0) {
            result[evenIndex] = num;
            evenIndex += 2
        } else {
            result[oddIndex] = num;
            oddIndex += 2
        }
    }
    return result
};

// 📌 TESTCASE:
console.log(sortArrayByParityII([4,2,5,7])) // [4,5,2,7] || [4,7,2,5] || [2,5,4,7] || [2,7,4,5]
console.log(sortArrayByParityII([2,3])) // [2,3]