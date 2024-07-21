let maximumNumberOfStringPairs = function (words) {
    let result = 0
    for (let i = 0; i < words.length; i++) {
        if (words.slice(i + 1).includes(words[i].split("").reverse().join(""))) {
            result++
        }
    }
    return result
}

console.log(maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"]))
console.log(maximumNumberOfStringPairs(["ab","ba","cc"]))
console.log(maximumNumberOfStringPairs(["aa","ab"]))