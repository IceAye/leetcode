const getEncryptedString = function(s, k) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
        result += s.at((i + k) % s.length);
    }
    return result;
};

console.log(getEncryptedString("dart", 3)) // "tdar"
console.log(getEncryptedString("aaa", 1)) // "aaa"