// ❓ DESCRIPTION:
// You are given an integer array nums containing positive integers. We define a function encrypt such that encrypt(x) replaces every digit in x with the largest digit in x. For example, encrypt(523) = 555 and encrypt(213) = 333.
//
// Return the sum of encrypted elements.
//
// ✅ SOLUTION:
let sumOfEncryptedInt = function (nums) {
    let result = 0;
    for (let num of nums) {
        let array = Array.from(num.toString(), Number);
        let max = Math.max(...num.toString());

        num = +array.map(() => max).join("");
        result += num;
    }
    return result;
};

console.log(sumOfEncryptedInt([1, 2, 3]));
console.log(sumOfEncryptedInt([10, 21, 31]));
