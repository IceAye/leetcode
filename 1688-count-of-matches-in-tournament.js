// ❓ DESCRIPTION:
// You are given an integer n, the number of teams in a tournament that has strange rules:
// If the current number of teams is even, each team gets paired with another team.
// A total of n / 2 matches are played, and n / 2 teams advance to the next round.
// If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired.
// A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
//
// Return the number of matches played in the tournament until a winner is decided.
//
// 📌 EXAMPLES:
// Input = 7 Output = 6
// Input = 14 Output = 13
//
// ✅ SOLUTION:

let numberOfMatches = function(n) {
    let result = 0
    let win = n
    while (win > 1) {
        if (win % 2 === 0) {
            result += win / 2
            win = win/2
        } else {
            result += (win - 1) / 2
            win = (win - 1) / 2 + 1
        }
    }
    return result
};

console.log('Output: ' , numberOfMatches(7))
console.log('Output: ' , numberOfMatches(14))