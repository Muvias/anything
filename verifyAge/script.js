function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'Menino.jpg')
            } else if (idade < 21){
                //Jovem
            } else if (idade < 60){
                img.setAttribute('src', 'AdultoH.jpg')
            } else{ 
                img.setAttribute('src', 'Senhor.jpg')
            }
        } else{
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'Menina.jpg')
            } else if (idade < 21){
                //Jovem
            } else if (idade < 60){
                img.setAttribute('src', 'AdultoM.jpg')
            } else{ 
                img.setAttribute('src', 'Senhora.jpg')
            }
        }
        res.style.textAlign = 'Center'
        res.innerHTML=`Detecmos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}