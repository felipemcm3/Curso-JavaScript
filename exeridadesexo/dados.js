function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('nas')
    var res = window.document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Digite o nascimento')
    }
    else{
        var fsex = document.getElementsByName('txtsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //garoto
                img.setAttribute('src', 'imagens/menino.jpg')
            }
            else if(idade > 10 && idade < 21){
                //rapaz
                img.setAttribute('src', 'imagens/rapaz.jpg')
            }
            else if(idade >= 21 && idade < 50){
                //homem
                img.setAttribute('src', 'imagens/homem.jpg')
            }
            else{
                //idoso
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        }
        else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade <= 10){
                //garoto
                img.setAttribute('src', 'imagens/menina.jpg')
            }
            else if(idade < 21){
                //rapaz
                img.setAttribute('src', 'imagens/moca.jpg')
            }
            else if(idade < 50){
                //homem
                img.setAttribute('src', 'imagens/mulher.jpg')
            }
            else{
                //idoso
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}