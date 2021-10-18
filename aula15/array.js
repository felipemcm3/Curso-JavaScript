let num = []

for(var c = 0; c < 10; c++){
    if(c % 2 ==0){
        num[c] = c + 3
    }else{
        num[c] = c
    }
    
}
console.log(`${num}`)
console.log(`Esse vetor tem ${num.length} elementos`)
num.sort()
console.log(`Esse vetor com elementos em ordem ${num}`) 
console.log(`O número na posicão 4 e ${num[4]}`)
