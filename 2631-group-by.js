Array.prototype.groupBy = function (fn) {
    let obj = {};
    for (let i = 0; i < this.length; i++) {
        let key = fn(this[i]);
        if (obj[key] === undefined) {
            obj[key] = [];
        }
        obj[key].push(this[i]);
    }
    return obj;
};

console.log([1, 2, 3].groupBy(String)); // {"1":[1],"2":[2],"3":[3]}
console.log([{ id: "1" }, { id: "1" }, { id: "2" }].groupBy(function (item) {return item.id}));
// { "1": [{"id": "1"}, {"id": "1"}],  "2": [{"id": "2"}]}
console.log([[1, 2, 3],[1, 3, 5],[1, 5, 9]].groupBy(fn = function (list) {return String(list[0])}))
// "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]