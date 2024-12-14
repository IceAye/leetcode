function reverseOnlyLetters(s) {
    const array = [...s];
    let [i, j] = [0, array.length - 1];
    while (i < j) {
        while (!/[a-zA-Z]/.test(array[i]) && i < j) {
            i++;
        }
        while (!/[a-zA-Z]/.test(array[j]) && i < j) {
            j--;
        }
        [array[i], array[j]] = [array[j], array[i]];
        i++;
        j--;
    }
    return array.join("");
}

console.log(reverseOnlyLetters("ab-cd")); // "dc-ba"
console.log(reverseOnlyLetters("a-bC-dEf-ghIj")); // "j-Ih-gfE-dCba"
console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!")); // "Qedo1ct-eeLg=ntse-T!"