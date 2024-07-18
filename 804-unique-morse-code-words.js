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