let numberGame = function(nums) {
    nums.sort((a, b) => a - b)
    let arr = []
    for (let i = 0; i < nums.length; i += 2) {
        arr.push(nums[i+1], nums[i])
    }
    return arr
}

console.log('Output: ' , numberGame([5,4,2,3]))
console.log('Output: ' , numberGame([2,5]))