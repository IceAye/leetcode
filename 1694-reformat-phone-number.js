const reformatNumber = function (number) {
    let string = number.replace(/[-\s]/g, "");
    let n = string.length;
    if (n < 4) return string;
    let prefix = '';
    let suffix = string.slice(-4);
    let count = 0;

    for (let i = 0; i < n - 4; i++) {
        prefix += string[i];
        count++;
        if (count === 3) {
            prefix += '-';
            count = 0;
        }
    }
    if (n % 3 === 0) {
        prefix += `${suffix[0]}-${suffix[1]}${suffix[2]}${suffix[3]}`;
    } else if (n % 3 === 1) {
        prefix += `${suffix[0]}${suffix[1]}-${suffix[2]}${suffix[3]}`
    } else if (n % 3 === 2) {
        prefix += `${suffix[0]}${suffix[1]}-${suffix[2]}${suffix[3]}`
    }
    return prefix;
};

console.log(reformatNumber("1-23-45 6")) // "123-456"
console.log(reformatNumber("123 4-567")) // "123-45-67"
console.log(reformatNumber("123 4-5678")) // "123-456-78"
console.log(reformatNumber("123 4-5678-56-777777")) // "123-456-78"