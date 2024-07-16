// ❓ DESCRIPTION:
// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes.
// The biker starts his trip on point 0 with altitude equal 0.
// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i and i + 1
// for all (0 <= i < n). Return the highest altitude of a point.
//
// ✅ SOLUTION:
let largestAltitude = function(gain) {
    let array = []
    for (let i = 0; i < gain.length; i++) {
        array.push(gain.slice(0, i + 1).reduce((sum, current) => sum + current, 0))
    }
    return Math.max(...array, 0)
}

console.log(largestAltitude([-5,1,5,0,-7]))
console.log(largestAltitude([-4,-3,-2,-1,4,3,2]))