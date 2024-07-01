/*❓ DESCRIPTION:
You are given a positive integer num consisting of exactly four digits.
    Split num into two new integers new1 and new2 by using the digits found in num.
    Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

📌 EXAMPLES:
Input: num = 2932 Output: 52
The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.

Input: num = 4009 Output: 13
The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.

✅ SOLUTION:    */
let minimumSum = function(num) {
    let digits = String(num).split('').sort();
    return parseInt(digits[0] + digits[2]) + parseInt(digits[1] + digits[3]);
};
