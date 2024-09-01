let generateKey = function(num1, num2, num3) {
    let digits = function ( num ) {
        if (num < 10) return "000" + num;
        if (num < 100) return  "00" + num;
        if (num < 1000) return  "0" + num;
        if (num >= 1000) return num.toString()
    }
    num1 = digits(num1);
    num2 = digits(num2);
    num3 = digits(num3);
    let key = "";
    for (let i = 0; i < 4; i++) {
        key += Math.min(num1[i], num2[i], num3[i])
    }
    return +key;
};

console.log(generateKey( 1, 10, 1000))
console.log(generateKey( 987, 879, 798))
console.log(generateKey( 1, 2, 3))