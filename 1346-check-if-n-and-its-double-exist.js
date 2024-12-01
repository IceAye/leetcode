const checkIfExist = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.some((item, index, array) => index !== i && item === 2 * array[i])) return true
    }
    return false;
};

console.log(checkIfExist([10,2,5,3])) // true
console.log(checkIfExist([3,1,7,11])) // false
console.log(checkIfExist([0,0])) // true
console.log(checkIfExist([-2,0,10,-19,4,6,-8])) // false