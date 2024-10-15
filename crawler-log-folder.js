let minOperations = function (logs) {
    let stack = [];
    logs.map((item) =>
        item === "../" ? stack.pop() : item === "./" ? item : stack.push(item),
    );
    return stack.length;
};

console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"]));
console.log(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"]));
console.log(minOperations(["d1/", "../", "../", "../"]));
console.log(minOperations(["./", "../", "./"]));
console.log(minOperations(["./", "wz4/", "../", "mj2/", "../", "../", "ik0/", "il7/"]));