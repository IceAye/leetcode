let sortPeople = function ( names , heights ) {
    let result = []
    while (heights.length > 0) {
        let index = heights.indexOf(Math.max(...heights))

        result.push(names[index])
        names.splice(index , 1)
        heights.splice(index , 1)
    }
    return result
}

console.log(sortPeople(["Mary" , "John" , "Emma"] , [180 , 165 , 170]))
console.log(sortPeople(["Alice" , "Bob" , "Bob"] , [155 , 185 , 150]))