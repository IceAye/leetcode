let evenOddBit = function (n) {
    let count = [0, 0];
    let array = [...n.toString(2)].reverse();
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0 && array[i] === "1") count[0]++;
        if (i % 2 === 1 && array[i] === "1") count[1]++;
    }
    return count;
};

console.log(evenOddBit(50));
console.log(evenOddBit(2));
