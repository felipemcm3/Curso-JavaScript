let caixa = [6,8,10,43,104]
/*
for(let c=0; c < caixa.length; c++){
    console.log(`A posição ${c} contém ${caixa[c]}`)
}
*/
for(let c in caixa){
    console.log(`Na posição ${c} temos o valor ${caixa[c]}`)
}

let pos = caixa.indexOf(2)
if(pos == -1){
    console.log(`O valor não está presente no vetor`)
}
else{
    console.log(`O valor 43 está na posição ${pos}`)
}
