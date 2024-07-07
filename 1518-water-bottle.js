let numWaterBottles = function(numBottles, numExchange) {
    let result = numBottles
    while (numBottles >= numExchange) {
        result += Math.floor(numBottles/ numExchange)
        numBottles = Math.floor(numBottles / numExchange) + (numBottles % numExchange)
    }
    return result
}