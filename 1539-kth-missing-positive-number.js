const findKthPositive = function (arr, k) {
    let result = []
    let i = 1;
    while (k > 0) {
        if (!arr.includes(i)) {
            result.push(i)
            k--;
        }
        i++;
    }
    return result.at(-1);
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5)); // 9
console.log(findKthPositive([1, 2, 3, 4], 2)); // 6
console.log(findKthPositive([1, 2], 1)); // 3
console.log(findKthPositive([2], 1)); // 1