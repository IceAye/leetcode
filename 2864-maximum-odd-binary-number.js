const maximumOddBinaryNumber = function(s) {
    const onesLength = s.match(/1/g).length;
    return '1'.repeat(onesLength - 1) + '0'.repeat(s.length - onesLength) + '1';
};

console.log(maximumOddBinaryNumber("010")) // "001"
console.log(maximumOddBinaryNumber("0101")) // "1001"