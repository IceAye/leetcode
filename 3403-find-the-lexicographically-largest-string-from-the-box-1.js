const answerString = function(word, numFriends) {
    if (numFriends === 1) return word;

    const sortedWord = [...word].sort();
    const mostWeightedChar = sortedWord.at(-1);

    const max = [];

    for (let i = 0; i < word.length; i++) {
        if (word[i] === mostWeightedChar) {
            let string = word.slice(i, i + word.length - numFriends + 1);
            max.push(string);
        }
    }

    return max.sort().at(-1);
};

console.log(answerString( "dbca",  2)) // "dbc"
console.log(answerString("gggg",  4)) // "g"
console.log(answerString("aann", 2)) // "nn"
console.log(answerString("gh", 1)) // "gh"
console.log(answerString("yxz", 3)) // "z"
console.log(answerString("xzy", 2)) // "zy"

