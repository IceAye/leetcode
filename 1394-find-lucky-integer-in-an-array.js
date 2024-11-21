const findLucky = function(arr) {
    let map = new Map();
    arr.map(item => map.set(item, map.get(item) + 1 || 1));
    return [...map.entries()].reduce((acc, curr) => {
        if (curr[0] === curr[1]) acc = Math.max(curr[0], acc);
        return acc;
    }, -1);
};

console.log(findLucky([2,2,3,4])) // 2
console.log(findLucky([1,2,2,3,3,3])) // 3
console.log(findLucky([2,2,2,3,3])) // -1