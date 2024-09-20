// ❓ DESCRIPTION:
// You are given a string s.
// Your task is to remove all digits by doing this operation repeatedly:
// Delete the first digit and the closest non-digit character to its left.
// Return the resulting string after removing all digits.
//
// ✅ SOLUTION:
let clearDigits = function (s){
    const stack = [];
    for (const char of s) {
        if (!isNaN(char)) {
            stack.pop();
        } else stack.push(char);
    }
    return stack.join("");
};

console.log(clearDigits("abc"));
console.log(clearDigits("cb34"));
