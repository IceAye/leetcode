let freqAlphabets = function(s) {
    let result = "";
    let i = 0;
    while (i < s.length) {
        if (i + 2 <= s.length && s[i + 2] === "#") {
            result += String.fromCharCode(Number(s[i] + s[i + 1]) + 96);
            i += 3
        } else {
            result += String.fromCharCode(Number(s[i]) + 96);
            i++
        }
    }
    return result
};

console.log(freqAlphabets("10#11#12"));
console.log(freqAlphabets("1326#"));