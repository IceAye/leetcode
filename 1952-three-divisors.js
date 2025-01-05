const isThree = function (n) {
    let potentialPrime = Math.sqrt(n);
    if (!Number.isInteger(potentialPrime) || n === 1) {
        return false;
    } else {
        for (let i = 2; i < potentialPrime; i++) {
            if (potentialPrime % i === 0) return false;
        }
        return true;
    }
};

console.log(isThree(2)); // false
console.log(isThree(4)); // true
console.log(isThree(1)); // false