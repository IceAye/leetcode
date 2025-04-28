const generate = function(numRows) {
    let result = []

    const pascalLine = (num) => {
        const currentLine = [1];
        const currentLineSize = num + 1;

        for (let i = 1; i < currentLineSize; i++) {
            currentLine[i] = (currentLine[i - 1] * (num - i + 1)) / i;
        }

        return currentLine;
    }

    for (let i = 0; i < numRows; i++) {
        result.push(pascalLine(i))
    }

    return result
};


console.log(generate(5)) // [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
console.log(generate(1)) // [[1]]
