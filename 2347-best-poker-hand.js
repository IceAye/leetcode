// ❓ DESCRIPTION:
// You are given an integer array ranks and a character array suits. You have 5 cards where the ith card has a rank of ranks[i] and a suit of suits[i].
//
// The following are the types of poker hands you can make from best to worst:
// "Flush": Five cards of the same suit.
// "Three of a Kind": Three cards of the same rank.
// "Pair": Two cards of the same rank.
// "High Card": Any single card.
// Return a string representing the best type of poker hand you can make with the given cards.
// Note that the return values are case-sensitive.
//
// ✅ SOLUTION:

const bestHand = function (ranks , suits) {
    if (new Set(suits).size === 1) {
        return "Flush";
    }
    ranks.sort((a , b) => a - b);
    if (ranks[0] === ranks[2] || ranks[1] === ranks[3] || ranks[2] === ranks[4]) {
        return "Three of a Kind";
    }
    if (new Set(ranks).size <= 4) {
        return "Pair";
    }
    return "High Card";
};

// 📌 TESTCASE:
console.log(bestHand([13 , 2 , 3 , 1 , 9] , ["a" , "a" , "a" , "a" , "a"])); // "Flush"
console.log(bestHand([4 , 4 , 2 , 4 , 4] , ["d" , "a" , "a" , "b" , "c"])); // "Three of a Kind"
console.log(bestHand([10 , 10 , 2 , 12 , 9] , ["a" , "b" , "c" , "a" , "d"])); // "Pair"
console.log(bestHand([13 , 12 , 3 , 4 , 7] , ["a" , "d" , "c" , "b" , "c"])); // "High Card"