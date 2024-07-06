let decodeMessage = function ( key , message ) {
    let keyString = [...new Set(key.replace(/ /g , ''))].join('')
    let result = ''
    for (let i = 0; i < message.length; i++) {
        result += String.fromCharCode(keyString.indexOf(message[i]) + 97)
    }
    return result.split('`').join(' ')
}

console.log('Output: ' , decodeMessage("the quick brown fox jumps over the lazy dog" , "vkbs bs t suepuv"))
console.log('Output: ' , decodeMessage("eljuxhpwnyrdgtqkviszcfmabo" , "zwx hnfx lqantp mnoeius ycgk vcnjrdb"))