// ❓ DESCRIPTION:
// We have two special characters:
// The first character can be represented by one bit 0.
// The second character can be represented by two bits (10 or 11).
// Given a binary array bits that ends with 0, return true if the last character must be a one-bit character.
// 📅 (daily problem 2025 November, 18th)

// ❗ CONSTRAINTS:
// 1 <= bits.length <= 1000
// bits[i] is either 0 or 1.

// ✅ SOLUTION (100% runtime, 70.27% memory):
/**
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = function(bits) {
    for (let i = 0; i < bits.length;) {
        if (bits[i + 1] === undefined) return true;
        if (bits[i] === 1) {
            i += 2;
        }
        else {
            i++;
        }
    }
    return false;
};

// 📌 TESTCASE:
console.log(isOneBitCharacter([1 , 0 , 0])); // true
console.log(isOneBitCharacter([1 , 1 , 1 , 0])); // false
console.log(isOneBitCharacter([1 , 1 , 0 , 1 , 0])); // false