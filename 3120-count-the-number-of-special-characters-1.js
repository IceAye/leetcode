const numberOfSpecialChars = function(word) {
    let hashMap = new Map();

    for (let char of word ) {
        if (!hashMap.has(char.toLowerCase())) {
            hashMap.set(char.toLowerCase(), char)
        } else {
            if (hashMap.get(char.toLowerCase()) !== char) {
                hashMap.set(char.toLowerCase(), 2)
            }
        }
    }

    return [...hashMap.values()].filter(value => value === 2).length;
};

console.log(numberOfSpecialChars("aaAbcBC")) // 3
console.log(numberOfSpecialChars("abc")) // 0
console.log(numberOfSpecialChars("abBCab")) // 1
console.log(numberOfSpecialChars("Cc")) // 1