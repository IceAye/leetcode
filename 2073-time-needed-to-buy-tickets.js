// ❓ DESCRIPTION:
// There are n people in a line queuing to buy tickets, where the 0th person is at the front of the line and the (n - 1)th person is at the back of the line.
// You are given a 0-indexed integer array tickets of length n where the number of tickets that the ith person would like to buy is tickets[i].
// Each person takes exactly 1 second to buy a ticket. A person can only buy 1 ticket at a time and has to go back to the end of the line (which happens instantaneously) in order to buy more tickets. If a person does not have any tickets left to buy, the person will leave the line.
// Return the time taken for the person initially at position k (0-indexed) to finish buying tickets.
//
// ✅ SOLUTION:
let timeRequiredToBuy = function (tickets, k) {
    let result = 0;
    for (let i = 0; i < tickets.length; ++i) {
        result += Math.min(tickets[i], i <= k ? tickets[k] : tickets[k] - 1);
    }
    return result;
};

// 📌 TESTCASE:
console.log(timeRequiredToBuy([2, 3, 2], 2)); // 6
console.log(timeRequiredToBuy([5, 1, 1, 1], 0)); // 8
console.log(timeRequiredToBuy([84,49,5,24,70,77,87,8], 3)); // 154
