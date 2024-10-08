// ❓ DESCRIPTION:
// You are given a positive integer arrivalTime denoting the arrival time of a train in hours, and another positive
// integer delayedTime denoting the amount of delay in hours.  Return the time when the train will arrive at the
// station.  Note that the time in this problem is in 24-hours format.
//
// ✅ SOLUTION:
let findDelayedArrivalTime = function ( arrivalTime , delayedTime ) {
    let time = arrivalTime + delayedTime;
    return time % 24;
};

console.log(findDelayedArrivalTime(15 , 5));
console.log(findDelayedArrivalTime(13 , 11));
console.log(findDelayedArrivalTime(23 , 24));
console.log(findDelayedArrivalTime(12 , 24));