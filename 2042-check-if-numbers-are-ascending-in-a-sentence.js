let areNumbersAscending = function (s) {
    let numbers = s.split(" ").reduce((acc, curr) => {
        if (Number.isInteger(+curr)) acc.push(+curr);
        return acc;
    }, []);
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] >= numbers[i + 1]) return false;
    }
    return true;
};


console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")) // true
console.log(areNumbersAscending("hello world 5 x 5")) // false
console.log(areNumbersAscending("sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s")) // false
