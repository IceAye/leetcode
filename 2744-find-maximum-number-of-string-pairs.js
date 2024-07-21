// ❓ DESCRIPTION:
// You are given a 0-indexed array words consisting of distinct strings.
//
// The string words[i] can be paired with the string words[j] if:
//
// The string words[i] is equal to the reversed string of words[j].
// 0 <= i < j < words.length.
// Return the maximum number of pairs that can be formed from the array words.
//
// Note that each string can belong in at most one pair.
//
// ✅ SOLUTION:
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