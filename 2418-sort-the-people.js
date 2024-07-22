// ❓ DESCRIPTION:
// You are given an array of strings names, and an array heights that consists of distinct positive integers.
// Both arrays are of length n.
//
// For each index i, names[i] and heights[i] denote the name and height of the ith person.
//
// Return names sorted in descending order by the people's heights.
//
// ✅ SOLUTION:

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