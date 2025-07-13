// ❓ DESCRIPTION:
// You are given a 0-indexed integer array players, where players[i] represents the ability of the ith player. You are also given a 0-indexed integer array trainers, where trainers[j] represents the training capacity of the jth trainer.
// The ith player can match with the jth trainer if the player's ability is less than or equal to the trainer's training capacity. Additionally, the ith player can be matched with at most one trainer, and the jth trainer can be matched with at most one player.
// Return the maximum number of matchings between players and trainers that satisfy these conditions.
// (daily question 2025 July, 13th)

// ✅ SOLUTION:
const matchPlayersAndTrainers = function(players, trainers) {
    players.sort((a, b) => a - b);
    trainers.sort((a, b) => a - b);
    let result = 0;

    let i = 0;
    let j = 0;
    while (i < players.length && j < trainers.length) {
        if (players[i] <= trainers[j]) {
            result++;
            i++;
            j++;
        }
        while (players[i] > trainers[j]) {
            j++;
        }
    }
    return result;
};

// 📌 TESTCASE:
console.log(matchPlayersAndTrainers([4,7,9],  [8,2,5,8])) // 2
console.log(matchPlayersAndTrainers([1,1,1],  [10])) // 1