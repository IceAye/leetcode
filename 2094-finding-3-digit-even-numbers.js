const findEvenNumbers = function(digits) {
    let result = [];

    let map = new Map();
    let hasEvens = false;
    for (const digit of digits) {
        if (digit % 2 === 0) hasEvens = true;
        map.set(digit, map.get(digit) + 1 || 1)
    }

    if (hasEvens) {
        for (let num = 100; num < 999; num += 2) {
            let numbers = num.toString();

            let currentMap = new Map();
            for (const item of numbers) {
                currentMap.set(+item, currentMap.get(+item) + 1 || 1);
            }

            let isValid = true;

            for (const el of currentMap.keys()) {
                if (!map.has(el) || map.get(el) < currentMap.get(el)) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) result.push(num);
            isValid = true;
        }
    }
    return result;
};

console.log(findEvenNumbers([2,1,3,0])) // [102,120,130,132,210,230,302,310,312,320]
console.log(findEvenNumbers([2,2,8,8,2])) // [222,228,282,288,822,828,882]
console.log(findEvenNumbers([3,7,5])) // []