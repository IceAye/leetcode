const sortArray = function(nums) {
    if (nums.length <= 1) return nums;

    function mergeSort(left, right) {
        let result = [];
        let indLeft = 0;
        let indRight = 0;

        while (indLeft < left.length && indRight < right.length) {
            if (left[indLeft] < right[indRight]) {
                result.push(left[indLeft]);
                indLeft++;
            } else {
                result.push(right[indRight]);
                indRight++;
            }
        }

        while (indLeft < left.length) {
            result.push(left[indLeft]);
            indLeft++;
        }

        while (indRight < right.length) {
            result.push(right[indRight]);
            indRight++;
        }

        return result;
    }

    if (nums.length <= 1) return nums;

    let middle = Math.floor(nums.length / 2);

    let left = nums.slice(0, middle);
    let right = nums.slice(middle)

    return mergeSort(sortArray(left), sortArray(right));
};

console.log(sortArray([5,2,3,1])) // [1,2,3,5]
console.log(sortArray([5,1,1,2,0,0])) // [0,0,1,1,2,5]