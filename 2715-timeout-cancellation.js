// ❓ DESCRIPTION:
// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
// setTimeout(cancelFn, cancelTimeMs)
// Initially, the execution of the function fn should be delayed by t milliseconds.
// If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.
//
// ✅ SOLUTION:
let cancellable = function(fn, args, t) {
    let timer = setTimeout(() => {
        fn(...args)
    }, t)
    return function (  ) {
        clearTimeout(timer)
    }
};

// 📌 TESTCASE:
console.log(cancellable(fn = (x) => x * 5, args = [2], t = 20)) // [{"time": 20, "returned": 10}]
console.log(cancellable(fn = (x) => x**2, args = [2], t = 100)) // []
console.log(cancellable( fn = (x1, x2) => x1 * x2, args = [2,4], t = 30)) // [{"time": 30, "returned": 8}]