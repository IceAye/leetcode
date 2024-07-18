// ❓ DESCRIPTION:
// Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.
//
// For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...".
// We will call such a concatenation the transformation of a word.
// Return the number of different transformations among all words we have.
//
// ✅ SOLUTION:

const morseCode = [".-" , "-..." , "-.-." , "-.." , "." , "..-." , "--." , "...." , ".." , ".---" , "-.-" , ".-.." , "--" , "-." , "---" , ".--." , "--.-" , ".-." , "..." , "-" , "..-" , "...-" , ".--" , "-..-" , "-.--" , "--.."]
const abc = "abcdefghijklmnopqrstuvwxyz"
let uniqueMorseRepresentations = function ( words ) {
    let sum = 0
    let result = []
    for (let i = 0; i < words.length; i++) {
        let word = ''
        for (const char of words[i]) {
            word += morseCode[abc.indexOf(char)]
        }
        result.push(word)
    }
    return new Set(result).size
}

console.log(uniqueMorseRepresentations(["gin" , "zen" , "gig" , "msg"]))
console.log(uniqueMorseRepresentations(["a"]))