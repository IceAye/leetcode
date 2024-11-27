let once = function ( fn ) {
    let flag = 0
    return function ( ...args ) {
        if (flag === 0) {
            flag = 1
            return fn(...args)
        }
    }
}