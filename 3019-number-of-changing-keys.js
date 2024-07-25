let countKeyChanges = function (s) {
    let result = 0;
    let array = s.toLowerCase().split("");
    for (let i = 0; i < array.length; i++) {
        array[i] !== array[i + 1] ? result++ : result;
    }
    return result - 1;
};

console.log(countKeyChanges("aAbBcC"));
console.log(countKeyChanges("AaAaAaaA"));
console.log(countKeyChanges("mDVD"));