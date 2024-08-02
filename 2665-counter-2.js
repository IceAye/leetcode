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
