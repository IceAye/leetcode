// ❓ DESCRIPTION:
// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.
//
// ✅ SOLUTION:
let once = function ( fn ) {
    let flag = 0
    return function ( ...args ) {
        if (flag === 0) {
            flag = 1
            return fn(...args)
        }
    }
}