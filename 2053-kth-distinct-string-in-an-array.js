let kthDistinct = function (arr, k) {
    let distinctArray = [];
    for (let item in arr) {
        if (arr.indexOf(arr[item]) === arr.lastIndexOf(arr[item]))
            distinctArray.push(arr[item]);
    }
    return distinctArray[k - 1] || "";
};

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
console.log(kthDistinct(["aaa", "aa", "a"], 1));
console.log(kthDistinct(["a", "b", "a"], 3));
