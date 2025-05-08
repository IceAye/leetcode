const minMovesToSeat = function(seats, students) {
    let sortedSeats = seats.sort((a, b) => a - b);
    let sortedStudents = students.sort((a, b) => a - b);

    let result = 0;
    for (let i = 0; i < sortedStudents.length; i++) {
        result += Math.abs(sortedSeats[i] - sortedStudents[i]);
    }
    return result;
};

console.log(minMovesToSeat([3,1,5], [2,7,4])) // 4
console.log(minMovesToSeat([4,1,5,9], [1,3,2,6])) // 7
console.log(minMovesToSeat([2,2,6,6], [1,3,2,6])) // 4
