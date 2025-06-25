const findClosest = function(x, y, z) {
    const person1 = Math.abs(z - x);
    const person2 = Math.abs(z - y);
    return person1 < person2 ? 1 : person1 > person2 ? 2 : 0;
};

console.log(findClosest(2, 7, 4)) // 1
console.log(findClosest(2, 5, 6)) // 2
console.log(findClosest(1, 5, 3)) // 0