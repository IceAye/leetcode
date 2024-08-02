let map = function ( arr , fn ) {
    let array = []
    for (let i = 0; i < arr.length; i++) {
        array.push(fn(arr[i] , i))
    }
    return array
};

console.log(map([1 , 2 , 3] , function plusone( n ) {
    return n + 1;
}))
console.log(map([1 , 2 , 3] , function plusI( n , i ) {
    return n + i;
}))
console.log(map([10 , 20 , 30] , function constant() {
    return 42;
}))