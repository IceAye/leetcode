// ❓ DESCRIPTION:
// You are given a string word. A letter is called special if it appears both in lowercase and uppercase in word.
// Return the number of special letters in word.
//
// ✅ SOLUTION:
const numberOfSpecialChars = function (word) {
    let hashMap = new Map();

    for (let char of word) {
        if (!hashMap.has(char.toLowerCase())) {
            hashMap.set(char.toLowerCase() , char)
        } else {
            if (hashMap.get(char.toLowerCase()) !== char) {
                hashMap.set(char.toLowerCase() , 2)
            }
        }
    }

    return [...hashMap.values()].filter(value => value === 2).length;
};

// 📌 TESTCASE:
console.log(numberOfSpecialChars("aaAbcBC")) // 3
console.log(numberOfSpecialChars("abc")) // 0
console.log(numberOfSpecialChars("abBCab")) // 1
console.log(numberOfSpecialChars("Cc")) // 1