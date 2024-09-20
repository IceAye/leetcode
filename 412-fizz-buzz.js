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
