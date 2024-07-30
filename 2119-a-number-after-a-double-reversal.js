let isSameAfterReversals = function (num) {
    return num.toString().at(-1) != 0 || num === 0;
};

console.log(isSameAfterReversals(526));
console.log(isSameAfterReversals(1800));
console.log(isSameAfterReversals(0));
console.log(isSameAfterReversals(000));
console.log(isSameAfterReversals(1000));