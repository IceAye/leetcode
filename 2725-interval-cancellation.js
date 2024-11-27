let cancellable = function(fn, args, t) {
    fn(...args)
    let interval = setInterval(() => fn(...args), t)

    return function (  ) {
        clearInterval(interval)
    }
}