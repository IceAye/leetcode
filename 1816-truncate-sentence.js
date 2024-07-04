let truncateSentence = function ( s , k ) {
    return s.split(' ').slice(0 , k).join(' ')
}

console.log('Output: ' ,truncateSentence("Hello how are you Contestant", 4))
console.log('Output: ' ,truncateSentence("What is the solution to this problem", 4))
console.log('Output: ' ,truncateSentence("chopper is not a tanuki", 5))