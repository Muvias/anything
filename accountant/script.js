function Contar() {
    var inc = document.getElementById('inc');
    var fim = document.getElementById('fim');
    var passo = document.getElementById('passo');
    var cinc = Number(inc.value)
    var cfim = Number(fim.value)
    var cpasso = Number(passo.value)
        cont.innerHTML = 'Contando'

    if(inc.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] faltando dados.')
    }
    if(cpasso <= 0){
        window.alert('[ERRO] Passo menor ou igual a 0. Considerando passo = 1')
        cpasso = 1
    }

    if( cinc < cfim){ //contagem crescente
        for(var c = cinc ; c <= cfim ; c += cpasso ){
            cont.innerHTML += `, ${c}`
        }
    } else{ //contagem regressiva
        for(var c = cinc ; c >= cfim ; c -= cpasso)
            cont.innerHTML += `, ${c}`
      }
        cont.innerHTML += `. \u{1F970}`  
}
    