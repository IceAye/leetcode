// ❓ DESCRIPTION:
// The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1
// respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.
// The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack.
// At each step:
// If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and
// leave the queue. Otherwise, they will leave it and go to the queue's end. This continues until none of the queue
// students want to take the top sandwich and are thus unable to eat.
// Return the number of students that are unable to eat.
//
// ✅ SOLUTION:
let countStudents = function ( students , sandwiches ) {
    const count = [0 , 0];

    for (const student of students) {
        count[student]++;
    }

    for (const sandwich of sandwiches) {
        if (count[sandwich] === 0) {
            return count[sandwich ^ 1];
        }
        count[sandwich]--;
    }
    return 0;
};

console.log(countStudents([1 , 1 , 0 , 0] , [0 , 1 , 0 , 1]));
console.log(countStudents([1 , 1] , [0 , 1]));
console.log(countStudents([1 , 1 , 1 , 0 , 0 , 1] , [1 , 0 , 0 , 0 , 1 , 1]));
console.log(
    countStudents([0 , 0 , 0 , 1 , 1 , 1 , 1 , 0 , 0 , 0] , [1 , 0 , 1 , 0 , 0 , 1 , 1 , 0 , 0 , 0]) ,
);
