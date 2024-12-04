const divideString = function (s, k, fill) {
    let result = [];
    for (let i = 0; i < s.length; i += k) {
        result.push(s.slice(i, i + k));
    }
    while (result.at(-1).length < k) {
        result[result.length - 1] += fill;
    }
    return result;
};

console.log(divideString("abcdefghi", 3, "x")); // ["abc","def","ghi"]
console.log(divideString("abcdefghij", 3, "x")); // ["abc","def","ghi","jxx"]