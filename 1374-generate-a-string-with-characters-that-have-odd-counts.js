let generateTheString = function (n) {
    let result = "";

    if (n % 2 !== 0) {
        while (n > 0) {
            result += "a";
            n--;
        }
        return result;
    } else {
        while (n > 1) {
            result += "a";
            n--;
        }
        return result + "b";
    }
};

console.log(generateTheString(4));
console.log(generateTheString(2));
console.log(generateTheString(7));
