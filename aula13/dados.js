function conta(){
    var num = window.document.getElementById('primeiro')
    var ult = window.document.getElementById('ultimo')
    var pass = window.document.getElementById('passo')
    var res = window.document.getElementById('resultado')
    //Validando dados
    if(num.value.length == 0 || ult.value.length == 0 || pass.value.length == 0 || pass.value <= 0){
        res.innerHTML = `Impossivel contar`
    }
    else{
        res.innerHTML = 'Contando:'
        //Transformando em Numeros
        let n = Number(num.value)
        let u = Number(ult.value)
        let p = Number(pass.value)
        //Contagem crescente
        if(n <= u){
            while(n <= u){
                res.innerHTML += `\u{1F449}${n} `
                n += p
            }
        }//Contagem decrescente
        else{
            for(let c = n; c >= u; c -= p){
                res.innerHTML += `\u{1F449}${c}`
            }
            
        }
        res.innerHTML += `\u{1F44D}`
        
    }
    
}