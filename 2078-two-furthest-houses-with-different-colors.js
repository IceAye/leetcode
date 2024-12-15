const maxDistance = function (colors) {
    let left = colors[0];
    let right = colors[colors.length - 1];
    let differColorLeft = 0;
    let differColorRight = 0;

    for (let i = 1; i < colors.length; i++) {
        if (left !== colors[i]) differColorLeft = i;
    }

    for (let i = 0; i < colors.length; i++) {
        if (right !== colors[i]) {
            differColorRight = i;
            break;
        }
    }
    return Math.max(differColorLeft, colors.length - 1 - differColorRight);
};

console.log(maxDistance([1, 1, 1, 6, 1, 1, 1])); // 3
console.log(maxDistance([1, 8, 3, 8, 3])); // 4
console.log(maxDistance([0, 1])); // 1
console.log(maxDistance([4, 4, 4, 11, 4, 4, 11, 4, 4, 4, 4, 4])); // 8