let restoreString = function (s, indices) {
    let result = []
    for (let i = 0; i < indices.length; i++) {
        result[indices[i]] = s[i]
    }
    return result.join('')
}
console.log('Output: ' , restoreString("codeleet", [4,5,6,7,0,2,1,3]))
console.log('Output: ' , restoreString("abc", [0,1,2]))
