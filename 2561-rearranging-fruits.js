/**
 * @param {number[]} basket1
 * @param {number[]} basket2
 * @return {number}
 */
const minCost = function(basket1, basket2) {
    let freqMap = new Map();

    for (let i = 0; i < basket1.length; i++) {
        freqMap.set(basket1[i] , (freqMap.get(basket1[i]) || 0) + 1);
        freqMap.set(basket2[i] , (freqMap.get(basket2[i]) || 0) - 1);
    }

    const costs = [];
    let minElement = Infinity;

    for (const [key , value] of freqMap) {
        minElement = Math.min(minElement , key);
        if (value % 2 !== 0) return -1;
        let diff = Math.abs(value) / 2;
        for (let i = 0; i < diff; i++) {
            costs.push(key);
        }
    }

    costs.sort((a , b) => a - b);
    let result = 0;
    for (let i = 0; i < costs.length / 2; i++) {
        result += Math.min(costs[i] , 2 * minElement);
    }

    return result;
}

console.log(minCost([4,2,2,2], [1,4,1,2])) // 1
console.log(minCost([2,3,4,1], [3,2,5,1])) // -1
console.log(minCost([4,4,4,4,3], [5,5,5,5,3])) // 8