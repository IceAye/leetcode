let findDifference = function ( nums1 , nums2 ) {
    let first = new Set(nums1);
    let second = new Set(nums2);
    for (const num of first) {
        if (second.has(num)) {
            first.delete(num);
            second.delete(num);
        }
    }
    return [Array.from(first) , Array.from(second)];
};

console.log(findDifference([1 , 2 , 3] , [2 , 4 , 6]));
console.log(findDifference([1 , 2 , 3 , 3] , [1 , 1 , 2 , 2]));
console.log(findDifference([-68 , -80 , -19 , -94 , 82 , 21 , -43] , [-63]));