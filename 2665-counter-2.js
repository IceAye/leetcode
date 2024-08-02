// ❓ DESCRIPTION:
// Write a function createCounter. It should accept an initial integer init. It should return an object with three
// functions.  The three functions are:  increment() increases the current value by 1 and then returns it. decrement()
// reduces the current value by 1 and then returns it. reset() sets the current value to init and then returns it.
//
// ✅ SOLUTION:
let createCounter = function ( init ) {
    let count = init

    function increment() {
        ++count
        return count
    }

    function decrement() {
        --count
        return count
    }

    function reset() {
        count = init
        return count
    }

    return {
        increment ,
        decrement ,
        reset
    }
}
