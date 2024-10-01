let answerQueries = function(nums, queries) {
    let answer = []
    nums.sort((a, b) => a - b);
    for (const query of queries) {
        let result = 0;
        let count = 0;
        for (let i = 0; i < query; i++) {
            result += nums[i];
            if (result <= query) {
                count++;
            } else break
        }
        answer.push(count);
    }
    return answer;
};

console.log(answerQueries([4,5,2,1], [3,10,21]));
console.log(answerQueries([2,3,4,5], [1]));