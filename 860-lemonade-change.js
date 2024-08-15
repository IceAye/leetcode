let lemonadeChange = function (bills) {
    let bills5 = 0;
    let bills10 = 0;

    for (const bill of bills) {
        if (bill === 5) {
            bills5++;
        } else if (bill === 10) {
            if (bills5 > 0) {
                bills5--;
                bills10++;
            } else return false;
        } else if (bill === 20) {
            if (bills10 > 0 && bills5 > 0) {
                bills5--;
                bills10--;
            } else if (bills5 > 2) {
                bills5 -= 3;
            } else return false;
        }
    }
    return true;
};
console.log(lemonadeChange([5, 5, 10, 10, 20]));
console.log(lemonadeChange([5, 5, 5, 10, 20]));