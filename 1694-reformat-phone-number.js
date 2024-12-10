// ❓ DESCRIPTION:
// You are given a phone number as a string number. number consists of digits, spaces ' ', and/or dashes '-'.
// You would like to reformat the phone number in a certain manner. Firstly, remove all spaces and dashes. Then, group the digits from left to right into blocks of length 3 until there are 4 or fewer digits. The final digits are then grouped as follows:
// 2 digits: A single block of length 2.
// 3 digits: A single block of length 3.
// 4 digits: Two blocks of length 2 each.
// The blocks are then joined by dashes. Notice that the reformatting process should never produce any blocks of length 1 and produce at most two blocks of length 2.
// Return the phone number after formatting.
//
// ✅ SOLUTION (runtime 100%):
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

// 📌 TESTCASE:
console.log(reformatNumber("1-23-45 6")) // "123-456"
console.log(reformatNumber("123 4-567")) // "123-45-67"
console.log(reformatNumber("123 4-5678")) // "123-456-78"
console.log(reformatNumber("123 4-5678-56-777777")) // "123-456-78"