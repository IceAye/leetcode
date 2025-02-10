const dayOfTheWeek = function(day, month, year) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[new Date(year, month - 1, day).getDay()]
};

console.log(dayOfTheWeek(31,8,2019)) // "Saturday"
console.log(dayOfTheWeek(18,7,1999)) // "Sunday"
console.log(dayOfTheWeek(15,8,1993)) // "Sunday"
