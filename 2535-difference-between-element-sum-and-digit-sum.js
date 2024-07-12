let differenceOfSum = function ( nums ) {
    function sum ( value ) {
        return value.reduce(( sum , current ) => sum + current)
    }

    let digits = nums.join('').split('').map(Number)
    return Math.abs(sum(nums) - sum(digits))
}

console.log('Output: ' , differenceOfSum([1 , 15 , 6 , 3]))
console.log('Output: ' , differenceOfSum([1 , 2 , 3 , 4]))