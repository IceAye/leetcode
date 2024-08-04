let findDifference = function (nums1, nums2) {
    let first = new Set();
    let second = new Set();
    for (const num of nums1) {
        if (!nums2.includes(num)) first.add(num);
    }
    for (const num of nums2) {
        if (!nums1.includes(num)) second.add(num);
    }
    let answer = [];
    answer[0] = [...first];
    answer[1] = [...second];
    return answer;
};

console.log(findDifference([1, 2, 3], [2, 4, 6]));
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));
console.log(findDifference([-68, -80, -19, -94, 82, 21, -43], [-63]));