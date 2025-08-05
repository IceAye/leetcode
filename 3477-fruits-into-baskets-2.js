/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
const numOfUnplacedFruits = function(fruits, baskets) {
    let result = 0;

    for (let i = 0; i < fruits.length; i++) {
        const index = baskets.findIndex(basket => fruits[i] <= basket);
        if (index === -1) {
            result++;
        } else {
            baskets[index] = 0;
        }
    }

    return result;
};

console.log(numOfUnplacedFruits([4,2,5], [3,5,4])) // 1
console.log(numOfUnplacedFruits([3,6,1], [6,4,7])) // 0