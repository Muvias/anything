let count = []
let saveAction

const MAX_VISOR_CHAR = 15

function addNumber(num){
  document.getElementById("total").removeAttribute("hidden")
    if(document.getElementById("total").innerHTML.length < MAX_VISOR_CHAR){
      document.getElementById("total").innerHTML += num
    }
}

function calcAction(action){
  var currentNumber = document.getElementById("total").innerHTML
  
  if(currentNumber.length === 0) { return }

  count.push(Number(document.getElementById("total").innerHTML))

  document.getElementById("accumulator").innerHTML += ` ${document.getElementById("total").innerHTML} ${action}`
  document.getElementById("total").innerHTML = ""
  count.push(action)
}

function addComma(){
  var currentNumber = document.getElementById("total").innerHTML

  if(!currentNumber.includes(".")) {
    document.getElementById("total").innerHTML += ","
  }
}

function result() {
  currentAccum = document.getElementById("accumulator").innerHTML
  currentNumber = document.getElementById("total").innerHTML

  if (currentAccum[currentAccum.length - 1] === "=" && currentNumber.length > 0) {
    document.getElementById("total").innerHTML = ProcessAction(Number(currentNumber), saveAction).toString().substring(0, MAX_VISOR_CHAR)
  }

  if (count.length === 0) { return }

  count.push(Number(document.getElementById("total").innerHTML))
  document.getElementById("accumulator").innerHTML += ` ${document.getElementById("total").innerHTML} =`
  ProcessResult()
}

function ProcessResult(){
  let action = null
  let current = null

  let total = 0 

  if (isNaN(count[count.length - 1])){
    count.pop()
  }

  count.forEach(n => {
    if (!isNaN(n)) {
      if (current == null) {
        current = n
      } else {
        total += ProcessAction(current, n, action)
        current = null
      }
    } else {
      action = n
      saveAction = n
    }
  })

  if (current != null) {
    total = ProcessAction(total, current, action)
  }

  document.getElementById("total").innerHTML = total.toString().substring(0, MAX_VISOR_CHAR)
  count = []

}

function ProcessAction(num1, num2, action) {
  switch (action) {
    case '+': return num1 + num2
    case '-': return num1 - num2
    case '/': return num1 / num2
    case 'x': return num1 * num2
  }
}

function cleanCurrent() {
  document.getElementById("total").innerHTML = ""
}

function cleanAll() {
  document.getElementById("total").innerHTML = ""
  document.getElementById("accumulator").innerHTML = ""
  count = []
}

function percentage(){
  var currentNumber = document.getElementById("total").innerHTML
  if (currentNumber != ""){
    document.getElementById("total").innerHTML = Number(document.getElementById("total").innerHTML) / 100
  }
} 