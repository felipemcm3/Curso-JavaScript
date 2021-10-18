function fatorial(n){
    let ini = 1
    for( c=n; c>1; c--){
        ini *= c
    }
    return ini
}

console.log(fatorial(5))
