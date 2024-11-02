let isCircularSentence = function(sentence) {
    if (sentence.at(0) !== sentence.at(-1)) return false
    let array = sentence.split(" ");
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i].at(-1) !== array[i + 1].at(0)) return false;
    }
    return true;
};

console.log(isCircularSentence("leetcode exercises sound delightful")) // true
console.log(isCircularSentence("eetcode")) // true
console.log(isCircularSentence("Leetcode is cool")) // false
console.log(isCircularSentence("ab a a")) // false