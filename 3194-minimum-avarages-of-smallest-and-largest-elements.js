let minimumAverage = function(nums) {
    let averages = []
    let sorted = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length / 2; i++) {
        averages.push((sorted[i] + sorted[nums.length - (i + 1)]) / 2)
    }
    return Math.min(...averages)
}

console.log('Output: ' , minimumAverage([7,8,3,4,15,13,4,1]))
console.log('Output: ' , minimumAverage([1,9,8,3,10,5]))
console.log('Output: ' , minimumAverage([1,2,3,7,8,9]))