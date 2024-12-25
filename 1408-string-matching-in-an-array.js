// ❓ DESCRIPTION:
// Given an array of string words, return all strings in words that is a substring of another word. You can return the
// answer in any order.  A substring is a contiguous sequence of characters within a string
//
// ✅ SOLUTION 1:

const stringMatching = function (words) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[j].match(words[i])) {
                result.push(words[i]);
            } else if (words[i].match(words[j])) {
                result.push(words[j]);
            }
        }
    }
    return [...new Set(result)];
};

// ✅ SOLUTION 2:
const stringMatching = function (words) {
    let result = [];
    for (const word of words) {
        if (words.filter(el => el.includes(word)).length > 1) result.push(word);
    }
    return result;
};

// 📌 TESTCASE:
console.log(stringMatching(["mass" , "as" , "hero" , "superhero"])); // ["as","hero"]
console.log(stringMatching(["leetcode" , "et" , "code"])); // ["et","code"]
console.log(stringMatching(["blue" , "green" , "bu"])); // []
console.log(stringMatching(["leetcoder" , "leetcode" , "od" , "hamlet" , "am"])); // ["leetcode","od","am"]