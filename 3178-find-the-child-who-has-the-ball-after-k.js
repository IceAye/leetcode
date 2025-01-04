const numberOfChild = function (n, k) {
    let rest = k % (n - 1);
    k = (k / (n - 1)) | 0;
    return k % 2 ? n - rest - 1 : rest;
};

console.log(numberOfChild(3, 5)); // 1
console.log(numberOfChild(5, 6)); // 2
console.log(numberOfChild(4, 2)); // 2