/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = function(nums1, nums2) {
    const hash1 = countNumber(nums1);
    const hash2 = countNumber(nums2);

    function countNumber(array) {
        const hashmap = new Map();
        for (const el of array) {
            hashmap.set(el, (hashmap.get(el) || 0) + 1);
        }
        return hashmap;
    }

    const result = [];

    const [small, big] = hash1.size <= hash2.size ? [hash1, hash2] : [hash2, hash1];

    for (const [key, value] of small.entries()) {
        if (big.has(key)) {
            const count = Math.min(value, big.get(key));
            result.push(...new Array(count).fill(key));
        }
    }

    return result;

};

console.log(intersect([1,2,2,1], [2,2])) // [2,2]
console.log(intersect([4,9,5], [9,4,9,8,4])) // [4,9]
console.log(intersect([1,2,3,4], [3,5,4,])) // [3,4]