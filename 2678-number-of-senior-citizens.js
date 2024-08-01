let countSeniors = function(details) {
    for (let i = 0; i < details.length; i++){
        details[i] = details[i].substring(11,13)
    }
    return details.filter(item => item > "60").length
};

console.log(countSeniors(["7868190130M7522","5303914400F9211","9273338290F4010"]))
console.log(countSeniors(["1313579440F2036","2921522980M5644"]))