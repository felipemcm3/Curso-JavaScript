function confirma(){
    var pais = window.document.getElementById('nacionalidade').value
    var res = window.document.getElementById('resposta')

    if(pais == "Brasil" || pais == 'brasil'){
        res.innerHTML = `Você é Brasileiro`
    }
    else{
        res.innerHTML = `Você é estrangeiro`
    }
}

