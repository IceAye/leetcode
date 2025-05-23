const countMatches = function(items, ruleKey, ruleValue) {
    if (ruleKey === 'color') return items.filter(item => item[1] === ruleValue).length;
    if (ruleKey === 'type') return items.filter(item => item[0] === ruleValue).length;
    if (ruleKey === 'name') return items.filter(item => item[2] === ruleValue).length;
}


console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver")) // 1
console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], "type", "phone")) // 2
