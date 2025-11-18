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

console.log(isOneBitCharacter([1 , 0 , 0])); // true
console.log(isOneBitCharacter([1 , 1 , 1 , 0])); // false
console.log(isOneBitCharacter([1 , 1 , 0 , 1 , 0])); // false