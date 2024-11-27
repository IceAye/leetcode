// ❓ DESCRIPTION:
// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
// setTimeout(cancelFn, cancelTimeMs)
// The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.
//
// ✅ SOLUTION:
let cancellable = function(fn, args, t) {
    fn(...args)
    let interval = setInterval(() => fn(...args), t)

    return function (  ) {
        clearInterval(interval)
    }
}