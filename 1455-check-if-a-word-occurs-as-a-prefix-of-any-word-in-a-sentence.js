const isPrefixOfWord = function(sentence, searchWord) {
    return sentence.split(' ').findIndex(word => word.match(new RegExp(`^${searchWord}`))) + 1 || -1
};

console.log(isPrefixOfWord("i love eating burger", "burg")) // 4
console.log(isPrefixOfWord("this problem is an easy problem", "pro")) // 2
console.log(isPrefixOfWord("i am tired", "you")) // -1
console.log(isPrefixOfWord("i love eating broadburgers", 'burg')) // -1
