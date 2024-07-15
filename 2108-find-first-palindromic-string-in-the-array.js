let firstPalindrome = function (words) {
    for (const word of words) {
        if (word === word.split('').reverse().join('')) return word
    }
    return ''
}

console.log(firstPalindrome(["abc" , "car" , "ada" , "racecar" , "cool"]))
console.log(firstPalindrome(["notapalindrome" , "racecar"]))
console.log(firstPalindrome(["def","ghi"]))