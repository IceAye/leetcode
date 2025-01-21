function frequencyCounting(string) {
    let map = new Map();

    for (const char of string) {
        map.set(char, map.get(char) + 1 || 1);
    }
    return map;
}

const shortestCompletingWord = function (licensePlate, words) {
    let minLength = +Infinity;
    let result = "";

    let initial = licensePlate.toLowerCase().replace(/[\d\s]/gi, "");
    let initialFrequency = frequencyCounting(initial);

    for (const word of words) {
        let wordFrequency = frequencyCounting(word);

        if ([...initialFrequency.entries()].every(([key, value]) => wordFrequency.has(key) && wordFrequency.get(key) >= value)) {
            if (minLength > word.length) {
                minLength = word.length;
                result = word;
            }
        }
    }

    return result;
};

console.log(
    shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]),
); // "steps"
console.log(
    shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"]),
); // "pest"

console.log(
    shortestCompletingWord("Ah71752", ["suggest","letter","of","husband","easy","education","drug","prevent","writer","old"]),
); // "husband"