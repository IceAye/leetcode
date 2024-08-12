let findDelayedArrivalTime = function ( arrivalTime , delayedTime ) {
    let time = arrivalTime + delayedTime
    return time >= 24 ? Math.abs(24 - time) : time;
};

console.log(findDelayedArrivalTime(15 , 5));
console.log(findDelayedArrivalTime(13 , 11));
console.log(findDelayedArrivalTime(23 , 24));
console.log(findDelayedArrivalTime(12 , 24));