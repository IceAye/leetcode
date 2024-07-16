let largestAltitude = function(gain) {
    let array = []
    for (let i = 0; i < gain.length; i++) {
        array.push(gain.slice(0, i + 1).reduce((sum, current) => sum + current, 0))
    }
    return Math.max(...array, 0)
}

console.log(largestAltitude([-5,1,5,0,-7]))
console.log(largestAltitude([-4,-3,-2,-1,4,3,2]))