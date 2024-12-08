const numberOfAlternatingGroups = function(colors) {
    let length = colors.length;
    let count = 0;

    for (let i = 0; i < length; i++) {
        if (colors[(i - 1 + length) % length] === colors[(i + 1) % length] && colors[i] !== colors[(i + 1) % length]) count++;
    }
    return count;
};

console.log(numberOfAlternatingGroups([1,1,1])) // 0
console.log(numberOfAlternatingGroups([0,1,0,0,1])) // 3
