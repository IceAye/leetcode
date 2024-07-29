// ❓ DESCRIPTION:
// There are n soldiers standing in a line. Each soldier is assigned a unique rating value.
//
// You have to form a team of 3 soldiers amongst them under the following rules:
//
// Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
// A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
// Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).
//
// ✅ SOLUTION:
// runtime 66ms (100%) memo 48.84MB (92.86%)
let numTeams = function (rating) {
    let result = 0;
    for (let i = 0; i < rating.length; i++) {
        let smallLeft = 0;
        let bigLeft = 0;
        let smallRight = 0;
        let bigRight = 0;

        for (let j = 0; j < i; j++) {
            if (rating[j] < rating[i]) smallLeft++;
            if (rating[j] > rating[i]) bigLeft++;
        }

        for (let j = i + 1; j < rating.length; j++) {
            if (rating[j] > rating[i]) bigRight++;
            if (rating[j] < rating[i]) smallRight++;
        }
        result += smallLeft * bigRight + bigLeft * smallRight;
    }
    return result;
};

console.log(numTeams([2, 5, 3, 4, 1]));
console.log(numTeams([2, 1, 3]));
console.log(numTeams([1, 2, 3, 4]));