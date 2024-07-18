let sumOfTheDigitsOfHarshadNumber = function(x) {
    let sumOfDigits = String(x).split('').map(item => Number(item)).reduce((sum, current) => sum + current)
    return x % sumOfDigits === 0 ? sumOfDigits : -1
}

console.log(sumOfTheDigitsOfHarshadNumber(18))
console.log(sumOfTheDigitsOfHarshadNumber(23))