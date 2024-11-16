const intersection = function(nums) {
    let result = [];

    let map = new Map();
    for (const num of nums.flat()) {
        map.set(num, map.get(num) + 1 || 1);
    }

    for (const [key , value] of [...map.entries()]) {
        if (value === nums.length) result.push(key)
    }

    return result.sort((a, b) => a - b);
};

console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]])) // [3,4]
console.log(intersection([[1,2,3],[4,5,6]])) // []