let maximum69Number  = function(num) {
    return +String(num).replace(/6/, "9")
}

console.log(maximum69Number(9669))
console.log(maximum69Number(9996))