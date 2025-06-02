// ❓ DESCRIPTION:
// There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.
//
// You are giving candies to these children subjected to the following requirements:
//
// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// Return the minimum number of candies you need to have to distribute the candies to the children.
// 📅 (daily question 2025, June 2nd):
//
// ✅ SOLUTION:
const candy = function(ratings) {
    const n = ratings.length;
    const candies = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    return candies.reduce((sum, val) => sum + val, 0);
};

// 📌 TESTCASE:
console.log(candy([1,0,2])) // 5
console.log(candy([1,2,2])) // 4
console.log(candy([100, 80, 70, 60, 70, 80, 90, 100, 90, 80, 70, 60, 60])) // 35
console.log(candy([6, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0, 1, 0])) // 42
console.log(candy([20000, 20000, 16001, 16001, 16002, 16002, 16003, 16003, 16004, 16004, 16005, 16005, 16006, 16006, 16007, 16007, 16008, 16008, 16009, 16009, 16010, 16010, 16011, 16011, 16012, 16012, 16013, 16013, 16014, 16014, 16015, 16015, 16016, 16016, 16017, 16017, 16018, 16018, 16019, 16019, 16020, 16020, 16021, 16021, 16022, 16022, 16023, 16023, 16024, 16024])) // 74
