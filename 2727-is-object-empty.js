let isEmpty = function (obj) {
    return !Object.values(obj).length > 0;
};

console.log(isEmpty({ x: 5, y: 42 }));
console.log(isEmpty({}));
console.log(isEmpty([null, false, 0]));
console.log(isEmpty([]));
console.log(isEmpty({"length": 0}));