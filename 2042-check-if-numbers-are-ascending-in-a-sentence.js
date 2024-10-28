// ❓ DESCRIPTION:
// A sentence is a list of tokens separated by a single space with no leading or trailing spaces. Every token is either a positive number consisting of digits 0-9 with no leading zeros, or a word consisting of lowercase English letters.
// For example, "a puppy has 2 eyes 4 legs" is a sentence with seven tokens: "2" and "4" are numbers and the other tokens such as "puppy" are words.
// Given a string s representing a sentence, you need to check if all the numbers in s are strictly increasing from left to right (i.e., other than the last number, each number is strictly smaller than the number on its right in s).
// Return true if so, or false otherwise.
//
// ✅ SOLUTION:
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

// 📌 TESTCASE:
console.log(areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")) // true
console.log(areNumbersAscending("hello world 5 x 5")) // false
console.log(areNumbersAscending("sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s")) // false
