let isEmpty = function (obj) {
    for (const key in obj) {
        return false;
    }
    return true;
};

console.log(isEmpty({x: 5 , y: 42}));
console.log(isEmpty({}));
console.log(isEmpty([null , false , 0]));
console.log(isEmpty([]));
console.log(isEmpty({"length": 0}));