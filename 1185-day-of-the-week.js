// ❓ DESCRIPTION:
// Given a date, return the corresponding day of the week for that date.
// The input is given as three integers representing the day, month and year respectively.
// Return the answer as one of the following values {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"}.
//
// ✅ SOLUTION:
const dayOfTheWeek = function(day, month, year) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[new Date(year, month - 1, day).getDay()]
};

// 📌 TESTCASE:
console.log(dayOfTheWeek(31,8,2019)) // "Saturday"
console.log(dayOfTheWeek(18,7,1999)) // "Sunday"
console.log(dayOfTheWeek(15,8,1993)) // "Sunday"
