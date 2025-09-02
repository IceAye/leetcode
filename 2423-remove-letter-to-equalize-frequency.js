/**
 * @param {string} word
 * @return {boolean}
 */
const equalFrequency = function(word) {
    for (let i = 0; i < word.length; i++) {
        const newWord = word.slice(0, i) + word.slice(i + 1);

        const freqMap = new Map();
        for (const char of newWord) {
            freqMap.set(char, freqMap.get(char) + 1 || 1);
        }

        const values = new Set(freqMap.values());
        if (values.size === 1) return true;
    }

    return false;
};

console.log(equalFrequency("abcc")) // true
console.log(equalFrequency("aazz")) // false
console.log(equalFrequency("bac")) // true