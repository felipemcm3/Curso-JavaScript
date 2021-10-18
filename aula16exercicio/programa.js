let vetor = []

function checar(){
    var n = document.getElementById('numero')
    var p = document.getElementById('imprimindo')
    var r = document.getElementById('resposta')
    if(n.value.length == 0){
        window.alert('Informe um valor')
    }else{
        n = Number(n.value)
        if(n < 1 || n > 100){
            window.alert(`Informe o valor entre 1 e 100`)
        }
        else if(vetor.indexOf(n) != -1){
            window.alert(`Você já informou esse número`)
        }
        else{
            vetor.push(n)
            let item = document.createElement('option')
            item.innerHTML = `Número ${n} adicionado`
            p.appendChild(item) 
        }
    }
    r.innerHTML = ``
    n.value = ''
    n.focus()
}
function verificar(){
    if(vetor.length == 0){
        window.alert(`Adicione números primeiro`)
    }else{
        var res = document.getElementById('resposta')
    var maior = 0
    var menor = 0
    var soma = 0
    for(let pos = 0; pos < vetor.length;pos++){
        if(pos == 0){
            maior = vetor[pos]
            menor = vetor[pos]
        }else if(maior < vetor[pos]){
            maior = vetor[pos]
        }else if(menor > vetor[pos]){
            menor = vetor[pos]
        }
        soma += vetor[pos]
    }
    res.innerHTML = ``
    res.innerHTML += `O vetor ficou ${vetor}<br>`
    res.innerHTML += `São ${vetor.length} elementos<br>`
    res.innerHTML += `O maior foi ${maior}<br>`
    res.innerHTML += `O menor foi ${menor}<br>`
    res.innerHTML += `A soma dos elementos foi ${soma}`
    }
    
}
