let toGoatLatin = function(sentence) {
    return sentence.split(" ").reduce((acc, curr, index) => {
        if (!/[aeiou]/i.test(curr[0])) curr = curr.slice(1) + curr[0];
        acc.push(curr + "ma"  + "a".repeat(index + 1));
        return acc;
    }, []).join(" ");
};


console.log(toGoatLatin("I speak Goat Latin")) // "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
console.log(toGoatLatin("The quick brown fox jumped over the lazy dog")) // "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"