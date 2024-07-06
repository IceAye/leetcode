// ❓ DESCRIPTION:
// Write a function expect that helps developers test their code.
// It should take in any value val and return an object with the following two functions.
//
// toBe(val) accepts another value and returns true if the two values === each other.
// If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other.
// If they are equal, it should throw an error "Equal".
//
// ✅ SOLUTION:
let expect = function ( val ) {
    function toBe(value) {
        if (val === value) {
            return  true
        } else {
            throw new Error('Not Equal')
        }
    }
    function notToBe(value) {
        if (val !== value) {
            return true
        } else {
            throw new Error('Equal')
        }
    }
    return {
        toBe,
        notToBe
    }
}
