let removeDuplicates = function(s) {
    let stack = [];
    for (const char of s) {
        (stack.at(-1) !== char) ? stack.push(char) : stack.pop();
    }
    return stack.join("");
};


console.log(removeDuplicates("abbaca")) // "ca"
console.log(removeDuplicates("azxxzy")) // "ay"
console.log(removeDuplicates("abbbabaaa")) // "ababa"
console.log(removeDuplicates("aaaaaaaa")) // ""