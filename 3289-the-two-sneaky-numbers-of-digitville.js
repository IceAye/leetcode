const getSneakyNumbers = function (nums) {
    let map = new Map();
    for (const num of nums) {
        map.set(num, map.get(num) + 1 || 1);
    }
    return [...map.keys()].filter((number) => map.get(number) >= 2);
};

const getSneakyNumbers = function (nums) {
    let set = new Set();
    let result = [];
    for (const num of nums) {
        (set.has(num)) ? result.push(num) : set.add(num);
    }
    return result;
};

console.log(getSneakyNumbers([0,1,1,0])) // [0,1]
console.log(getSneakyNumbers([0,3,2,1,3,2])) // [2,3]
console.log(getSneakyNumbers([7,1,5,4,3,4,6,0,9,5,8,2])) // [4,5]