let checkIfPangram = function ( sentence ) {
    let result = new Set(sentence)
    return result.size === 26
}