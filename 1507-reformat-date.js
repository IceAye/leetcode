const reformatDate = function (date) {
    const months = {
        Jan: "01",
        Feb: "02",
        Mar: "03",
        Apr: "04",
        May: "05",
        Jun: "06",
        Jul: "07",
        Aug: "08",
        Sep: "09",
        Oct: "10",
        Nov: "11",
        Dec: "12",
    };
    let array = date.split(" ");
    let day = parseInt(array[0]) > 9 ? parseInt(array[0]) : '0' + parseInt(array[0]);
    return `${array[2]}-${months[array[1]]}-${day}`;
};

console.log(reformatDate("20th Oct 2052")); // "2052-10-20"
console.log(reformatDate("6th Jun 1933")); // "1933-06-06"
console.log(reformatDate("26th May 1960")); // "1960-05-26"
