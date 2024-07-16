let checkIfPangram = function ( sentence ) {
    let result = new Set(sentence)
    return result.size === 26
}

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))
console.log(checkIfPangram("leetcode"))