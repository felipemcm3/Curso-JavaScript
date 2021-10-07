var idade = 15
console.log(`Você tem ${idade}.`)
if(idade < 16){
    console.log(`Você não pode votar`)
}
else if(idade < 18 || idade > 65){
    console.log(`Você pode optar por votar`)
}
else{
    console.log(`Você é obrigado a votar`)
}

