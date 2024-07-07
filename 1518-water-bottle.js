// ❓ DESCRIPTION:
// There are numBottles water bottles that are initially full of water.
// You can exchange numExchange empty water bottles from the market with one full water bottle.
// The operation of drinking a full water bottle turns it into an empty bottle.
// Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.
//
// ✅ SOLUTION:
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