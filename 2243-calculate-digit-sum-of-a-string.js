const digitSum = function (s, k) {
    if (s.length <= k) return s;
    s = s
        .replace(new RegExp(`(.){${k}}`, 'g' ), '$&,')
        .split(",")
        .map((item) => item === '' ? null : [...item].reduce((acc, curr) => acc + +curr, 0))
        .join("");
    return digitSum(s, k)
};

console.log(digitSum("11111222223", 3)) // 135
console.log(digitSum("00000000", 3)) // "000"
console.log(digitSum("1234", 2)) // "37"