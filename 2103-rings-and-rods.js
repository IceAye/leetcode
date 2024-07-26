let countPoints = function (rings) {
    let result = 0;
    for (let i = 0; i < 10; i++) {
        if (
            rings.includes(`R${i}`) &&
            rings.includes(`G${i}`) &&
            rings.includes(`B${i}`)
        )
            result++;
    }
    return result;
};

console.log(countPoints("B0B6G0R6R0R6G9"));
console.log(countPoints("B0R0G0R9R0B0G0"));
console.log(countPoints("G4"));