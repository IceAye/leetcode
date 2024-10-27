let greatestLetter = function(s) {
    let frequency = new Map();
    [...new Set(s)].map(item => frequency.set(item.toUpperCase(), frequency.get(item.toUpperCase()) + 1 || 1));
    return [...frequency.entries()].reduce((acc, curr) => curr[0] > acc && curr[1] === 2 ? curr[0] : acc, "");
};

console.log(greatestLetter("lEeTcOdE")) // "E"
console.log(greatestLetter("arRAzFif")) // "R"
console.log(greatestLetter("AbCdEfGhIjK")) // ""