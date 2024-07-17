let isAcronym = function(words, s) {
    let result = false;
    for (let i = 0; i < words.length; i++) {
        if (words[i][0] === s[i] && words.length === s.length) {
            result = true
        } else {
            return false;
        }
    }
    return result
}

console.log(isAcronym(["alice","bob","charlie"], "abc"))
console.log(isAcronym(["an","apple"], "a"))
console.log(isAcronym(["afqcpzsx","icenu"], "yi"))
console.log(isAcronym(["a","b","c"], "abcd"))