let isAcronym = function(words, s) {
    return s === words.map(item => item[0]).join('')
}

console.log(isAcronym(["alice","bob","charlie"], "abc"))
console.log(isAcronym(["an","apple"], "a"))
console.log(isAcronym(["afqcpzsx","icenu"], "yi"))
console.log(isAcronym(["a","b","c"], "abcd"))