let replaceDigits = function ( s ) {
    let word = ""
    for (let i = 1; i < s.length; i += 2) {
        let char = String.fromCharCode(s.charCodeAt(i - 1) + +s.charAt(i))
        word += s[i - 1] + char
    }
    return s.length % 2 !== 0 ? word + s.at(-1) : word
}

console.log(replaceDigits("a1c1e1"))
console.log(replaceDigits("a1b2c3d4e"))