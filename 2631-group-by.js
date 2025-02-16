// ❓ DESCRIPTION:
// A part of 30 days JavaScript Challenge.
// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.
// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key.
// The provided callback fn will accept an item in the array and return a string key.
// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
// Please solve it without lodash's _.groupBy function.
//
// ✅ SOLUTION:
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

// 📌 TESTCASE:
console.log([1, 2, 3].groupBy(String)); // {"1":[1],"2":[2],"3":[3]}
console.log([{ id: "1" }, { id: "1" }, { id: "2" }].groupBy(function (item) {return item.id}));
// { "1": [{"id": "1"}, {"id": "1"}],  "2": [{"id": "2"}]}
console.log([[1, 2, 3],[1, 3, 5],[1, 5, 9]].groupBy(fn = function (list) {return String(list[0])}))
// "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]