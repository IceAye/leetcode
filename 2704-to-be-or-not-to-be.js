let expect = function ( val ) {
    function toBe(value) {
        if (val === value) {
            return  true
        } else {
            throw new Error('Not Equal')
        }
    }

    function notToBe(value) {
        if (val !== value) {
            return true
        } else {
            throw new Error('Equal')
        }
    }
    return {
        toBe,
        notToBe
    }
}