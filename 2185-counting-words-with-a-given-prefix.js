// ❓ DESCRIPTION:
// You are given an array of strings words and a string pref.
// Return the number of strings in words that contain pref as a prefix.
// A prefix of a string s is any leading contiguous substring of s.
//
// ✅ SOLUTION:
let prefixCount = function ( words , pref ) {
    let sum = 0;
    for (const word of words) {
        sum += word.startsWith(pref);
    }
    return sum;
};

console.log(prefixCount(["pay" , "attention" , "practice" , "attend"] , "at"));
console.log(prefixCount(["leet" , "win" , "locodeops" , "success"] , "code"));