function mostrar(){
    var n = window.document.getElementById('numero');
    var res = window.document.getElementById('resposta');

    if(n.value.length == 0 || n.value < 0){
        res.innerHTML = 'Informe um número'
    }
    else{
        var o = Number(n.value)
        var c = 1
        res.innerHTML = ``
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${o} x ${c} = ${o*c}`
            res.appendChild(item)
            c++
        }
    }
}
