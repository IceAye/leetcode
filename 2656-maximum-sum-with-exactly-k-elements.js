let maximizeSum = function ( nums , k ) {
    let num = Math.max(...nums)
    let result = num
    while (k - 1 > 0) {
        num++
        result += num
        k--
    }
    return result
}

console.log(maximizeSum([5 , 5 , 5] , 2))
console.log(maximizeSum([1 , 2 , 3 , 4 , 5] , 3))