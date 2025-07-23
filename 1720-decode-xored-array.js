/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = function(encoded, first) {
    const arr = [first];
    for (let i = 0; i < encoded.length; i++) {
        arr.push(encoded[i] ^ arr[i]);
    }
    return arr;
};

console.log(decode([1,2,3], 1)) // [1,0,2,1]
console.log(decode([6,2,7,3], 4)) // [4,2,0,7,4]