const promiseAll = function(functions) {
    return  new Promise((resolve, reject) => {
        let result = [];
        let count = 0;

        if (functions.length === 0) resolve(result);

        for (let i = 0; i < functions.length; i++) {
            functions[i]()
                .then(data => {
                    result[i] = data;
                    count++;
                    if (functions.length === count) resolve(result);
                })
                .catch(err => reject(err))
        }
    })
};