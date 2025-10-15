/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class Deque {
    constructor() {
        this.data = {};
        this.head = 0;
        this.tail = 0;
    }
    pushBack(x) { this.data[this.tail++] = x; }
    popBack() { return this.isEmpty() ? undefined : this.data[--this.tail]; }
    popFront() { return this.isEmpty() ? undefined : this.data[this.head++]; }
    front() { return this.data[this.head]; }
    back() { return this.data[this.tail - 1]; }
    isEmpty() { return this.head === this.tail; }
}

const maxSlidingWindow = function(nums, k) {
    const result = [];

    let deque = new Deque();

    for (let i = 0; i < nums.length; i++) {
        while (!deque.isEmpty() && nums[deque.back()] < nums[i]) deque.popBack();
        deque.pushBack(i);

        if (deque.front() <= i - k) deque.popFront();

        if (i >= k - 1) {
            result.push(nums[deque.front()]);
        }
    }

    return result;
};

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)) // [3,3,5,5,6,7]
console.log(maxSlidingWindow(nums = [1], 1)) // [1]