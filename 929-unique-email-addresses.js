const numUniqueEmails = function(emails) {
    return new Set(emails.map(email => email.split('@')).map(item => item[0].replace(/\.|\+(.*)/g, '') + "@" + item[1])).size
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])) // 2
console.log(numUniqueEmails(["a@leetcode.com","b@leetcode.com","c@leetcode.com"])) //
