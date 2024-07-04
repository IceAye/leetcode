let numberOfSteps = function ( num ) {
    let step = 0;
    while (num > 0) {
        num % 2 === 0 ? num /= 2 : num--
        step++
    }
    return step
}

console.log('Output: ' , numberOfSteps(14))
console.log('Output: ' , numberOfSteps(8))
console.log('Output: ' , numberOfSteps(123))