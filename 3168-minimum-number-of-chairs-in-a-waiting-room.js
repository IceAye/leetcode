let minimumChairs = function (s) {
    let currentCount = 0;
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "E") {
            currentCount++;
        } else currentCount--;
        result = Math.max(currentCount, result);
    }
    return result;
};

console.log(minimumChairs("EEEEEEE"))
console.log(minimumChairs("ELELEEL"))
console.log(minimumChairs("ELEELEELLL"))