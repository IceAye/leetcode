let mergeAlternately = function (word1, word2) {
    let string = "";
    for (let i = 0; i < word1.length; i++) {
        string += word1.charAt(i) + word2.charAt(i);
    }

    let remain = word2.length - word1.length;

    if (remain <= 0) {
        return string;
    } else {
        return string + word2.slice(word1.length);
    }
};

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));
console.log(mergeAlternately("cf", "eee"));