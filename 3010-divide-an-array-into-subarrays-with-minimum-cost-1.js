// ❓ DESCRIPTION:
// You are given an array of integers nums of length n.
// The cost of an array is the value of its first element. For example, the cost of [1,2,3] is 1 while the cost of
// [3,4,1] is 3.  You need to divide nums into 3 disjoint contiguous  subarrays .  Return the minimum possible sum of
// the cost of these subarrays.
//
// ✅ SOLUTION:
const minimumCost = function (nums) {
    let sorted = nums.slice(1).sort((a , b) => a - b);
    return nums[0] + sorted[0] + sorted[1];
};

// 📌 TESTCASE:
console.log(minimumCost([1 , 2 , 3 , 12])) // 6
console.log(minimumCost([5 , 4 , 3])) // 12
console.log(minimumCost([10 , 3 , 1 , 1])) // 12