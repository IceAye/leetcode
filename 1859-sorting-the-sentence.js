// ❓ DESCRIPTION:
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// Each word consists of lowercase and uppercase English letters.
// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.
//
// ✅ SOLUTION:
let sortSentence = function (s) {
    return s.split(' ').sort((a, b) => a.at(-1) - b.at(-1)).map(item => item.slice(0, -1)).join(' ')
}

console.log(sortSentence("is2 sentence4 This1 a3"))
console.log(sortSentence("Myself2 Me1 I4 and3"))