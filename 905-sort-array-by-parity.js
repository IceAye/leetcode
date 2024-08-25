// SOLUTION 1:
let sortArrayByParity = function (nums) {
    let even = [];
    let odd = [];

    for (const num of nums) {
        num % 2 === 0 ? even.push(num) : odd.push(num);
    }

    return [...even, ...odd];
};

console.log(sortArrayByParity([3, 1, 2, 4]));
console.log(sortArrayByParity([0]));
