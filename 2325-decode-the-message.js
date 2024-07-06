// ❓ DESCRIPTION:
// You are given the strings key and message, which represent a cipher key and a secret message, respectively.
// The steps to decode message are as follows:
//  Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
//  Align the substitution table with the regular English alphabet.
//  Each letter in message is then substituted using the table.
//  Spaces ' ' are transformed to themselves.
//
// ✅ SOLUTION:
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