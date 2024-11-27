const minimumBoxes = function(apple, capacity) {
    let sum = apple.reduce((acc, curr) => acc + curr, 0);
    capacity.sort((a, b) => b - a);

    let count = 0;
    let i = 0;
    while (sum > 0) {
        count++;
        sum -= capacity[i];
        i++;
    }
    return count;
};

console.log(minimumBoxes([1,3,2],  [4,3,1,5,2])) // 2
console.log(minimumBoxes([5,5,5],  [2,4,2,7])) // 4