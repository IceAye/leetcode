let clearDigits = function (s){
    const stack = [];
    for (const char of s) {
        if (!isNaN(char)) {
            stack.pop();
        } else stack.push(char);
    }
    return stack.join("");
};

console.log(clearDigits("abc"));
console.log(clearDigits("cb34"));
