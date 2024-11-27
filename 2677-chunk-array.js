let chunk = function ( arr , size ) {
    let resultArr = []
    let i = 0
    let j = size
    while (i < arr.length) {
        let tempArr = arr.slice(i, j)
        resultArr.push(tempArr)
        i += size
        j += size
    }
    return resultArr
}