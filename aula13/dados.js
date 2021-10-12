function conta(){
    var num = window.document.getElementById('primeiro').value
    var ult = window.document.getElementById('ultimo').value
    var pass = window.document.getElementById('passo').value
    var res = window.document.getElementById('resultado')
    var outra = document.createElement('o')
    var n = Number(num)
    var u = Number(ult)
    var p = Number(pass)

    while(n<=u){
        res.appendChild(outra);
        outra.textContent = "ola mundo"
    }
    
}