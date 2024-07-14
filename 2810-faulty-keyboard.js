let finalString = function ( s ) {
    let array = s.split('')
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'i') {
            result.reverse()
        } else {
            result.push(array[i])
        }
    }
    return result.join('')
}