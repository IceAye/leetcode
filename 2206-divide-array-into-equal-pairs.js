let divideArray = function (nums) {
    const map = new Map();
    for (const num of nums) {
        map.set(num, map.get(num) + 1 || 1);
    }
    return [...map.values()].every((value) => value % 2 === 0);
};

console.log(divideArray([3,2,3,2,2,2]));
console.log(divideArray([1,2,3,4]));