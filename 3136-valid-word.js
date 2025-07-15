/**
 * @param {string} word
 * @return {boolean}
 */
const isValid = function(word) {
    return /^(?=.*[aeiou])(?=.*[bcdfghjklmnpqrstvwyxz])[a-z0-9]{3,}$/i.test(word);
};

console.log(isValid("234Adas")) // true
console.log(isValid("b3")) // false
console.log(isValid("a3$e")) // false
console.log(isValid("aya")) // true

