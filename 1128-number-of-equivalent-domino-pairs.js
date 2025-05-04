const numEquivDominoPairs = function(dominoes) {
    let map = new Map();

    for (let i = 0; i < dominoes.length; i++) {
        let current = dominoes[i]
        if (map.has(current.join('')) || map.has(current.reverse().join(''))) map.set(current.join(''), map.get(current.join('')) + 1);
        else map.set(current.join(''), 1)
    }

    return [...map.values()].reduce((acc, curr) => acc + (curr * (curr - 1)) / 2, 0);
};

console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]])) // 1
console.log(numEquivDominoPairs([[1,2],[1,2],[1,1],[1,2],[2,2]])) // 3