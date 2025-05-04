// ❓ DESCRIPTION:
// Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.
// Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].
// 📅 (daily question 2025 May, 4)
//
// ✅ SOLUTION:
const numEquivDominoPairs = function(dominoes) {
    let map = new Map();

    for (let i = 0; i < dominoes.length; i++) {
        let current = dominoes[i]
        if (map.has(current.join('')) || map.has(current.reverse().join(''))) map.set(current.join(''), map.get(current.join('')) + 1);
        else map.set(current.join(''), 1)
    }

    return [...map.values()].reduce((acc, curr) => acc + (curr * (curr - 1)) / 2, 0);
};

// 📌 TESTCASE:
console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]])) // 1
console.log(numEquivDominoPairs([[1,2],[1,2],[1,1],[1,2],[2,2]])) // 3