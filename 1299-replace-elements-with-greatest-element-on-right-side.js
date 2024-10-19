let replaceElements = function (arr) {
    let max = -1;
    let array = arr.reverse();
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(max)
        if (array[i] > max) {
            max = array[i]
        }
    }
    return result.reverse();
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
console.log(replaceElements([400]));
