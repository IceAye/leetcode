let sortPeople = function ( names , heights ) {
    let result = []
    let people = new Map()
    for (let i = 0; i < names.length; i++) {
        people.set(heights[i], names[i])
    }
    heights.sort(( a , b ) => b - a)
    for (const height of heights) {
        result.push(people.get(height))
    }
    return result
}

console.log(sortPeople(["Mary" , "John" , "Emma"] , [180 , 165 , 170]))
console.log(sortPeople(["Alice" , "Bob" , "Bob"] , [155 , 185 , 150]))