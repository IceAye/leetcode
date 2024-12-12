const minimumPushes = function(word) {
    let hashMap = new Map();
    for (const char of word) {
        hashMap.set(char, hashMap.get(char) + 1 || 1);
    }

    let sorted = [...hashMap.keys()].sort((a, b) => hashMap.get(b) - hashMap.get(a));

    let remap = [];
    for (let i = 0; i < sorted.length; i += 8) {
        remap.push(sorted.slice(i, i + 8));
    }
    let sumOfPushes = 0;

    for (let i = 0; i < remap.length; i++) {
        sumOfPushes += remap[i].reduce((acc, item) => acc + (i + 1) * hashMap.get(item), 0);
    }
    return sumOfPushes;
};

console.log(minimumPushes("abcde")) // 5
console.log(minimumPushes("xycdefghij")) // 12