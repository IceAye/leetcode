let findPeaks = function(mountain) {
    if (mountain.length < 3) return [];

    let peaks = [];
    for (let i = 1; i < mountain.length - 1; i++) {
        if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) peaks.push(i)
    }
    return peaks;
};

console.log(findPeaks([2,4,4]));
console.log(findPeaks([1,4,3,8,5]));