let sortSentence = function (s) {
    let array = s.split(' ')
    let result = []
    for (let i = 0; i < array.length; i++) {
        result[array[i].at(-1) - 1] = array[i].slice(0, -1)
    }
    return result.join(' ')
}

console.log(sortSentence("is2 sentence4 This1 a3"))
console.log(sortSentence("Myself2 Me1 I4 and3"))