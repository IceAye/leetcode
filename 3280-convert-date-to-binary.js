const convertDateToBinary = function(date) {
    return date.split("-").map(item => (+item).toString(2)).join("-");
};

console.log(convertDateToBinary("2080-02-29")); // "100000100000-10-11101"
console.log(convertDateToBinary("1900-01-01")); // "11101101100-1-1"

