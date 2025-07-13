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

console.log(matchPlayersAndTrainers([4,7,9],  [8,2,5,8])) // 2
console.log(matchPlayersAndTrainers([1,1,1],  [10])) // 1