const minSum = function(nums1, nums2) {

    function mapped (array) {
        let sum = 0;
        let zeroCount = 0;
        for (const num of array) {
            num === 0 ? zeroCount++ : sum += num;
        }
        let total = sum + zeroCount;
        return { zeroCount, total };
    }

    let counts1 = mapped(nums1);
    let counts2 = mapped(nums2);

    if ((counts1.total > counts2.total && counts2.zeroCount === 0) || (counts2.total > counts1.total && counts1.zeroCount === 0)) return -1;

    return (counts1.total > counts2.total) ? counts1.total : counts2.total;
};

console.log(minSum([3,2,0,1,0], [6,5,0])) // 12
console.log(minSum([2,0,2,0], [1,4])) // -1
console.log(minSum([8,13,15,18,0,18,0,0,5,20,12,27,3,14,22,0], [29,1,6,0,10,24,27,17,14,13,2,19,2,11])) // 179