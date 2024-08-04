// ❓ DESCRIPTION:
// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from city Ai
// to city Bi. Return the destination city, that is, the city without any path outgoing to another city.
// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination
// city.
//
// ✅ SOLUTION:
let destCity = function ( paths ) {
    let from = [];
    for (let i = 0; i < paths.length; i++) {
        from.push(paths[i][0]);
    }
    for (let i = 0; i < paths.length; i++) {
        if (!from.includes(paths[i][1])) return paths[i][1];
    }
};

console.log(
    destCity([
        ["London" , "New York"] ,
        ["New York" , "Lima"] ,
        ["Lima" , "Sao Paulo"] ,
    ]) ,
);

console.log(
    destCity([
        ["B" , "C"] ,
        ["D" , "B"] ,
        ["C" , "A"] ,
    ]) ,
);

console.log(
    destCity([
        ["qMTSlfgZlC" , "ePvzZaqLXj"] ,
        ["xKhZXfuBeC" , "TtnllZpKKg"] ,
        ["ePvzZaqLXj" , "sxrvXFcqgG"] ,
        ["sxrvXFcqgG" , "xKhZXfuBeC"] ,
        ["TtnllZpKKg" , "OAxMijOZgW"] ,
    ]) ,
);