const divisorSubstrings = function(num, k) {
    let str = num.toString();
    let result = 0;

    for (let i = 0; i <= str.length - k; i++ ) {
        let potentialKBeauty = +str.slice(i, i + k);
        if (num % potentialKBeauty === 0) {
            result++;
        }
    }
    return result;
};

console.log(divisorSubstrings(240, 2)) // 2
console.log(divisorSubstrings(430043, 2)) // 2
console.log(divisorSubstrings(30003, 3)) // 1
