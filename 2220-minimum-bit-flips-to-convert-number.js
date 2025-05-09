const minBitFlips = function(start, goal) {
    return (start ^ goal).toString(2).replace(/0/g, "").length;
}

console.log(minBitFlips(10, 7)) // 3
console.log(minBitFlips(3, 4)) // 3
console.log(minBitFlips(35, 22)) // 4