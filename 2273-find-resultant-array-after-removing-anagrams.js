/**
 * @param {string[]} words
 * @return {string[]}
 */
const removeAnagrams = function (words) {
    let i = 0;
    let array = [...words];

    while (i < array.length - 1) {
        const freq1 = new Array(26).fill(0);
        for (const char of array[i]) {
            freq1[char.charCodeAt(0) - 97] += 1;
        }

        while (i + 1 < array.length) {
            const freq2 = new Array(26).fill(0);
            for (const char of array[i + 1]) {
                freq2[char.charCodeAt(0) - 97] += 1;
            }
            if (freq1.join('') === freq2.join('')) {
                array.splice(i + 1, 1);
            } else break
        }

        i++;
    }
    return array
};

console.log(removeAnagrams(["abba","baba","bbaa","cd","cd"]))
console.log(removeAnagrams(["a","b","c","d","e"]))
console.log(removeAnagrams(["a","b","a"]))