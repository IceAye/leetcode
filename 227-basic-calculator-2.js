/**
 * @param {string} s
 * @return {number}
 */
const calculate = function(s) {
    let result = 0;
    let lastNumber = 0;
    let currentNumber = 0;
    let sign = '+';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (/\d/.test(char)) {
            currentNumber = currentNumber * 10 + Number(char);
        }

        if (/\D/.test(char) && char !== ' ' || i === s.length - 1) {
            switch (sign) {
                case '+':
                    result += lastNumber;
                    lastNumber = currentNumber;
                    break;
                case '-':
                    result += lastNumber;
                    lastNumber = -currentNumber;
                    break;
                case '*':
                    lastNumber *= currentNumber;
                    break;
                case '/':
                    lastNumber = Math.trunc(lastNumber / currentNumber);
                    break;
            }

            sign = char;
            currentNumber = 0;
        }
    }

    return result + lastNumber;
};


console.log(calculate('3+2*2')); // 7
console.log(calculate(' 3/2 ')); // 1
console.log(calculate(' 3+5 / 2 ')); // 5
console.log(calculate('4*4+3')); // 19
console.log(calculate('4*4-3 - 1')); // 12
