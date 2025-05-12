const maxFreqSum = function(s) {
    function countFrequence (string) {
        let map = new Map();
        for (const char of string) {
            map.set(char, map.get(char) + 1 || 1);
        }
        return map.size ? Math.max(...map.values()) : 0
    }

    let vowels = countFrequence(s.replace(/[^euioa]/gi, ""));
    let consonants = countFrequence(s.replace(/[euioa]/gi, ""));
    return vowels + consonants;
};

console.log(maxFreqSum("successes")) // 6
console.log(maxFreqSum("aeiaeia")) // 3
console.log(maxFreqSum("tttt")) // 4