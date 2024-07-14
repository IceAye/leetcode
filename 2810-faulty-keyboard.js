let finalString = function ( s ) {
    let result = []
    for (const char of s) {
        char === 'i' ? result.reverse() : result.push(char)
    }
    return result.join('')
}

console.log('Output: ' , finalString("string"))
console.log('Output: ' , finalString("poiinter"))