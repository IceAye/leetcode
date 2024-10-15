// ❓ DESCRIPTION:
// The Leetcode file system keeps a log each time some user performs a change folder operation.
// The operations are described below:
// "../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
// "./" : Remain in the same folder.
// "x/" : Move to the child folder named x (This folder is guaranteed to always exist).
// You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step.
//
// The file system starts in the main folder, then the operations in logs are performed.
//
// Return the minimum number of operations needed to go back to the main folder after the change folder operations.
//
// ✅ SOLUTION:
let minOperations = function (logs) {
    let stack = [];
    logs.map((item) =>
        item === "../" ? stack.pop() : item === "./" ? item : stack.push(item),
    );
    return stack.length;
};

// 📌 TESTCASE:
console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"]));
console.log(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"]));
console.log(minOperations(["d1/", "../", "../", "../"]));
console.log(minOperations(["./", "../", "./"]));
console.log(minOperations(["./", "wz4/", "../", "mj2/", "../", "../", "ik0/", "il7/"]));