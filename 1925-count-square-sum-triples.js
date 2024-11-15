// ❓ DESCRIPTION:
// A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2.
// Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.
//
// ✅ SOLUTION:
const countTriples = function(n) {
    let count = 0;
    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            let squared = Math.sqrt(a * a + b * b);
            if (squared <= n && Number.isInteger(squared)) count++;
        }
    }
    return count;
};

// 📌 TESTCASE:
console.log(countTriples(5)) // 2
console.log(countTriples(10)) // 4