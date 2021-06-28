function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('[ERRO] Digite um número.')
    } else{
        var n = Number(num.value)
        var d = 1
        tab.innerHTML = ''
        for(var c = n ; d <=10 ; c+=n){
            var item = document.createElement('option')
            item.text = `${n} x ${d} = ${c}.`
            item.value = `tab${d}` //somente importante para outras linguagens. JS não precisa
            tab.appendChild(item)
            d++
        }    
      }
}