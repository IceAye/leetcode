let kthCharacter = function(k) {
    let a = "a";
    while (a.length - 1 < k) {
        let generated = a.replace(/./gi, c => c === "z" ? "a" : String.fromCharCode(c.charCodeAt(0) + 1))
        a += generated.toLowerCase()
    }
    return a.at(k - 1)
};

console.log(kthCharacter(5))
console.log(kthCharacter(10))