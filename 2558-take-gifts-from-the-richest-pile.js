// ❓ DESCRIPTION:
// You are given an integer array gifts denoting the number of gifts in various piles. Every second, you do the following:
// Choose the pile with the maximum number of gifts.
// If there is more than one pile with the maximum number of gifts, choose any.
// Leave behind the floor of the square root of the number of gifts in the pile. Take the rest of the gifts.
// Return the number of gifts remaining after k seconds.
//
// ✅ SOLUTION:
const pickGifts = function(gifts, k) {
    let i = 0;
    while (i < k) {
        let max = Math.max(...gifts);
        gifts.splice(gifts.indexOf(max), 1, Math.floor(Math.sqrt(max)));
        i++;
    }
    return gifts.reduce((acc, curr) => acc + curr, 0);
};

// 📌 TESTCASE:
console.log(pickGifts([25,64,9,4,100], 4)) // 29
console.log(pickGifts([1,1,1,1], 4)) // 4