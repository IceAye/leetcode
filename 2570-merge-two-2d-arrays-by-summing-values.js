let mergeArrays = function (nums1, nums2) {
    let map = new Map(nums1);
    for (const num of nums2) {
        map.set(num[0], map.get(num[0]) + num[1] || num[1]);
    }
    return [...map].sort((a, b) => a[0] - b[0])
};

console.log(mergeArrays([[1,2],[2,3],[4,5]], [[1,4],[3,2],[4,1]]));
console.log(mergeArrays([[2,4],[3,6],[5,5]], [[1,3],[4,3]]));

