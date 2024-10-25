let checkDistances = function(s, distance) {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    for (const letter of s) {
        if (s.lastIndexOf(letter) - s.indexOf(letter) - 1 !== distance[abc.indexOf(letter)]) return false;
    }
    return true;
};

console.log(checkDistances("abaccb", [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])) // true
console.log(checkDistances("aa", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])) // false