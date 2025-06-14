const minMaxDifference = function (num) {
    let array = [...num.toString()];
    let indMax = array.findIndex((el) => el !== "9");
    let indMin = array.findIndex((el) => el !== "0");
    let max = num.toString().replaceAll(array[indMax], "9");
    let min = num.toString().replaceAll(array[indMin], "0");
    return max - min;
};

console.log(minMaxDifference(11891)); // 99009
console.log(minMaxDifference(90)); // 99