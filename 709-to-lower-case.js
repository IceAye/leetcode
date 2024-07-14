let toLowerCase = function (s) {
    let str = ''
    for (let char of s) {
        str += (char >= 'A' && char <= 'Z') ? String.fromCharCode(char.charCodeAt(0) + 32) : char
    }
    return str
}