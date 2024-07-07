let numWaterBottles = function(numBottles, numExchange) {
    let result = numBottles
    while (numBottles >= numExchange) {
        result += Math.floor(numBottles/ numExchange)
        numBottles = Math.floor(numBottles / numExchange) + (numBottles % numExchange)
    }
    return result
}

console.log('Output: ' , numWaterBottles(9, 3))
console.log('Output: ' , numWaterBottles(15, 4))
console.log('Output: ' , numWaterBottles(5, 5))