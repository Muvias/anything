function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var mnto = data.getMinutes();

    msg.innerHTML=`Agora são ${hora}:${mnto} horas.`
    
    if(hora < 12){ 
        img.src= "fotomanha.jpg"
        document.body.style.background = 'rgb(236, 231, 185)'
    } else if(hora < 16){
        img.src= "fototarde.jpg"
        document.body.style.background = 'rgb(240, 229, 130)'
    } else if(hora < 6){ 
        //boa madrugada
    } else if(hora <= 24){ 
        img.src= "fotonoite.jpg"
        document.body.style.background = 'rgba(0, 0, 0, 0.562)'
    }

}