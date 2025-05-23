// ❓ DESCRIPTION:
// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.
//
// The ith item is said to match the rule if one of the following is true:
//
// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.
//
// ✅ SOLUTION (100% runtime, 85.38% memory):
const countMatches = function(items, ruleKey, ruleValue) {
    if (ruleKey === 'color') return items.filter(item => item[1] === ruleValue).length;
    if (ruleKey === 'type') return items.filter(item => item[0] === ruleValue).length;
    if (ruleKey === 'name') return items.filter(item => item[2] === ruleValue).length;
}

// 📌 TESTCASE:
console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver")) // 1
console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], "type", "phone")) // 2
