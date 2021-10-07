function clicou(){
    var vel = Number(window.document.getElementById('txtvel').value)
    var res = window.document.getElementById('resultado')

    if(vel > 60){
        res.innerHTML = `Sua velocidade é <strong class='ultra'>${vel}</strong> está acima da permitida`
    }
    else{
        res.innerHTML = `Sua velocidade é <strong class='basica'>${vel}</strong> está dentro do limite`
    }   
}