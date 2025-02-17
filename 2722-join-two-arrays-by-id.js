const join = function (arr1, arr2) {
    const result = {};
    let arr = [...arr1, ...arr2].sort((a, b) => a.id - b.id);
    for (const item of arr) {
        if (result[item.id]) {
            result[item.id] = { ...result[item.id], ...item };
        } else {
            result[item.id] = {...item};
        }
    }
    return Object.values(result);
};

console.log(join([{"id": 1, "x": 1},{"id": 2, "x": 9}],[{"id": 3, "x": 5}])) //
// [{"id": 1, "x": 1},{"id": 2, "x": 9},{"id": 3, "x": 5}]
console.log(join([{"id": 1, "x": 2, "y": 3},{"id": 2, "x": 3, "y": 6}], [{"id": 2, "x": 10, "y": 20}, {"id": 3, "x": 0, "y": 0}]))
console.log(join([{"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}], [{"id": 1, "b": {"c": 84}, "v": [1, 3]}]))
//  {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
console.log(join([{"id":1,"x":36,"d":26,"f":35},{"id":3,"c":20,"z":75}], [{"id":2,"o":48,"z":84,"y":61}]))
