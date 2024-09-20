// ❓ DESCRIPTION:
// Given an integer n, return a string array answer (1-indexed) where:
//
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
//
// ✅ SOLUTION:
let fizzBuzz = function (n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        let number =
            i % 3 === 0 && i % 5 === 0
                ? "FizzBuzz"
                : i % 3 === 0
                    ? "Fizz"
                    : i % 5 === 0
                        ? "Buzz"
                        : i.toString();
        answer.push(number);
    }
    return answer;
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
