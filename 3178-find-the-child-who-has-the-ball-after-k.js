// ❓ DESCRIPTION:
// You are given two positive integers n and k. There are n children numbered from 0 to n - 1 standing in a queue in
// order from left to right.  Initially, child 0 holds a ball and the direction of passing the ball is towards the
// right direction. After each second, the child holding the ball passes it to the child next to them. Once the ball
// reaches either end of the line, i.e. child 0 or child n - 1, the direction of passing is reversed.
// Return the number of the child who receives the ball after k seconds.
//
// ✅ SOLUTION:

const numberOfChild = function (n , k) {
    let rest = k % (n - 1);
    k = (k / (n - 1)) | 0;
    return k % 2 ? n - rest - 1 : rest;
};

// 📌 TESTCASE:
console.log(numberOfChild(3 , 5)); // 1
console.log(numberOfChild(5 , 6)); // 2
console.log(numberOfChild(4 , 2)); // 2