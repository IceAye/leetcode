let flipAndInvertImage = function(image) {
    return image.map(row => row.reverse().map(item => 1 - item))
}

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))
console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]))
