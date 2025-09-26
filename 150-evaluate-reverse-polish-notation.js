// ❓ DESCRIPTION:
// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
// Evaluate the expression. Return an integer that represents the value of the expression.
// Note that:
// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

// ❗ CONSTRAINTS:
// 1 <= tokens.length <= 10^4
// tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].

// ✅ SOLUTION (50.60% runtime, 48.24% memory):
/**
 * @param {string[]} tokens
 * @return {number}
 */

const evalRPN = function (tokens) {
    const stack = [];

    for (let i = 0; i < tokens.length; i++) {
        const char = tokens[i];
        if (/\d/.test(char)) {
            stack.push(+char);
        } else {
            const second = stack.pop();
            const first = stack.pop();
            let result = operation(first , second , char);
            stack.push(result);
        }
    }

    function operation(op1 , op2 , operand) {
        switch (operand) {
            case '+':
                return op1 + op2;
            case '-':
                return op1 - op2;
            case '*':
                return op1 * op2;
            case '/':
                return Math.trunc(op1 / op2);
        }
    }

    return stack[0];
};

// 📌 TESTCASE:
console.log(evalRPN(['2' , '1' , '+' , '3' , '*'])); // 9
console.log(evalRPN(['4' , '13' , '5' , '/' , '+'])); // 6
console.log(evalRPN(['10' , '6' , '9' , '3' , '+' , '-11' , '*' , '/' , '*' , '17' , '+' , '5' , '+'])); // 22
console.log(evalRPN(['4' , '-2' , '/' , '2' , '-3' , '-' , '-'])); // -7
console.log(evalRPN(['18'])); // 18