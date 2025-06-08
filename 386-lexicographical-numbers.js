const lexicalOrder = function(n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i);
    }
    return array.sort();
};

console.log(lexicalOrder(13)) // [1,10,11,12,13,2,3,4,5,6,7,8,9]
console.log(lexicalOrder(2)) // [1,2]
