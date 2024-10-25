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

console.log(sortArrayByParityII([4,2,5,7])) // [4,5,2,7] || [4,7,2,5] || [2,5,4,7] || [2,7,4,5]
console.log(sortArrayByParityII([2,3])) // [2,3]