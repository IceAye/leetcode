let halvesAreAlike = function (s) {
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let half = s.length / 2;
    let count = 0;

    for (let i = 0; i < half; i++) {
        if (vowels.includes(s[i])) count++;
    }

    for (let i = half; i < s.length; i++) {
        if (vowels.includes(s[i])) count--;
    }
    return count === 0;
};

console.log(halvesAreAlike("biik"));
console.log(halvesAreAlike("bk"));
console.log(halvesAreAlike("textbook"));