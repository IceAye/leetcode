let compressedString = function(word) {
    let comp = "";
    let count = 1;
    for (let i = 0; i < word.length; i++) {
        if (count === 9) {
            comp += count + word[i];
            count = 0;
        }
        if (word[i] !== word[i + 1] && count !== 0) {
            comp += count + word[i];
            count = 1;
        } else count++;
    }
    return comp;
};

console.log(compressedString("abcde")) // "1a1b1c1d1e"
console.log(compressedString("aaaaaaaaaaaaaabb")) // "9a5a2b"
console.log(compressedString("aa")) // "2a"
console.log(compressedString("a")) // "1a"
console.log(compressedString("aaaaaaaaay")) // "9a1y"