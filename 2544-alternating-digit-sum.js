const alternateDigitSum = function(n) {
    let array = Array.from(n.toString(), Number)
    let sign = array.indexOf(Math.max(...array)) % 2 === 0
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        if (sign === 0) {
            if (i % 2 === 0) {
                result -= array[i]
            } else result += array[i]
        } else {
            if (i % 2 === 0) {
                result += array[i]
            } else result -= array[i]
        }
    }
    return result
};

console.log(alternateDigitSum(521)) // 4
console.log(alternateDigitSum(111)) // 1
console.log(alternateDigitSum(886996)) // 0