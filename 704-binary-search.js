const search = function(nums, target) {
    let start= 0;
    let end = nums.length - 1;

    while (start <= end) {
        let middleElement = Math.floor((start + end) / 2);
        if (target === nums[middleElement]) {
            return middleElement;
        } else if (target < nums[middleElement]) {
            end = middleElement - 1;
        } else if (target > nums[middleElement]) {
            start = middleElement + 1;
        }
    }
    return -1;
};

const search = function(nums, target) {
    return nums.indexOf(target)
};