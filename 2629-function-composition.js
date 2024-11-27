let compose = function ( functions ) {
    return x => functions.reduceRight(( prev , acc ) => acc(prev) , x)
}

