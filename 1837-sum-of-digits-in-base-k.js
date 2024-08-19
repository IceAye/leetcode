let sumBase = function (n, k) {
    return Array.from(n.toString(k).split(""), Number).reduce(
        (sum, current) => sum + current,
    );
};

console.log(sumBase(34, 6));
console.log(sumBase(10, 10));
