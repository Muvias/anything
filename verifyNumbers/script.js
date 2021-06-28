var g = [ ]

function adcionar(){
    msg.innerHTML=(``)
    var adc = Number(document.getElementById('num').value)
    var se = document.getElementById('sel')
    if(adc <=0 || adc > 100){
        window.alert(`[ERRO] Informe um valor dentro da margem solicitada.`)
    }else{
        
        g.push(adc)
        var item = document.createElement('option')
        item.text=`Adcionado o valor ${adc}`
        se.appendChild(item)
    }
    num.value = '' //para apagar o valor na barra
    num.focus()    //para voltar o foco pra barra depois de adicionar 
}



function finalizar(){
    soma = 0
    g.sort()
    for(var pos in g){
        soma += g[pos]
    }
    var média = soma / g.length
    msg.innerHTML=(`Ao todo temos ${g.length} números adicionados.`)
    msg.innerHTML+=(`<p>O maior valor informado foi ${Math.max.apply(Math, g)}`)
    msg.innerHTML+=(`<p>O menor valor informado foi ${Math.min.apply(Math, g)}`)
    msg.innerHTML+=(`<p>A soma dos valores informados deu ${soma} `)
    msg.innerHTML+=(`<p>A média dos valores informados é ${média}`)
}