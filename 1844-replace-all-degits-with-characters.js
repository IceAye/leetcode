let replaceDigits = function ( s ) {
    let word = ""
    for (let i = 0; i < s.length; i++) {
        if (i % 2 !== 0) {
            word += String.fromCharCode(s.charCodeAt(i - 1) + +s.at(i))
        } else {
            word += s.at(i)
        }
    }
    return word
}

console.log(replaceDigits("a1c1e1"))
console.log(replaceDigits("a1b2c3d4e"))