/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function(tokens) {
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

console.log(evalRPN(['2' , '1' , '+' , '3' , '*'])); // 9
console.log(evalRPN(['4' , '13' , '5' , '/' , '+'])); // 6
console.log(evalRPN(['10' , '6' , '9' , '3' , '+' , '-11' , '*' , '/' , '*' , '17' , '+' , '5' , '+'])); // 22
console.log(evalRPN(['4' , '-2' , '/' , '2' , '-3' , '-' , '-'])); // -7
console.log(evalRPN(['18'])); // 18