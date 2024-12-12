const pickGifts = function(gifts, k) {
    let i = 0;
    while (i < k) {
        let max = Math.max(...gifts);
        gifts.splice(gifts.indexOf(max), 1, Math.floor(Math.sqrt(max)));
        i++;
    }
    return gifts.reduce((acc, curr) => acc + curr, 0);
};

console.log(pickGifts([25,64,9,4,100], 4)) // 29
console.log(pickGifts([1,1,1,1], 4)) // 4