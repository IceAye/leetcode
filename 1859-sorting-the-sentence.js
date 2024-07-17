let sortSentence = function (s) {
    return s.split(' ').sort((a, b) => a.at(-1) - b.at(-1)).map(item => item.slice(0, -1)).join(' ')
}

console.log(sortSentence("is2 sentence4 This1 a3"))
console.log(sortSentence("Myself2 Me1 I4 and3"))