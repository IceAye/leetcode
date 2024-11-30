// ❓ DESCRIPTION:
// Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.
// For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
// If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.
// For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
// If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.
// For example, "m.y+name@email.com" will be forwarded to "my@email.com".
// It is possible to use both of these rules at the same time.
// Given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.
//
// ✅ SOLUTION (runtime 99.14%, memory 99.45%):

const numUniqueEmails = function(emails) {
    return new Set(emails.map(email => email.split('@')).map(item => item[0].replace(/\.|\+(.*)/g, '') + "@" + item[1])).size
};

// 📌 TESTCASE:
console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])) // 2
console.log(numUniqueEmails(["a@leetcode.com","b@leetcode.com","c@leetcode.com"])) //
