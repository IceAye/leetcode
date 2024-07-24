let numOfStrings = function ( patterns , word ) {
    let sum = 0;
    for (const pattern of patterns) {
        word.includes(pattern) ? sum++ : sum;
    }
    return sum;
};

console.log(numOfStrings(["a" , "abc" , "bc" , "d"] , "abc"));
console.log(numOfStrings(["a" , "b" , "c"] , "aaaaabbbbb"));
console.log(numOfStrings(["a" , "a" , "a"] , "ab"));