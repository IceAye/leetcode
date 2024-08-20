let findNumbers = function (nums) {
    let count = 0;

    for (const num of nums) {
        if (String(num).split("").length % 2 === 0) count++;
    }

    return count;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
console.log(findNumbers([555, 901, 482, 1771]));
