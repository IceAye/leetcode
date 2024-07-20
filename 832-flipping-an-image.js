let flipAndInvertImage = function(image) {
    const flipImage = []
    for (let i = 0; i < image.length; i++) {
        flipImage.push(image[i].reverse().map(item => item === 0 ? 1 : 0))
    }
    return flipImage
}

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))
console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]))
