// ONCLICK DO POPUP

const button = document.querySelector('button')
const wrapper = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
    wrapper.style.display = 'block'
})

wrapper.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    const classNames = ['popup-close', 'popup-wrapper', "grid-container"]
    const shouldClosePopup = classNames.some(className => className === classNameOfClickedElement)

    if(shouldClosePopup){
        wrapper.style.display = 'none'
    }

})

// CALCULADORA

const numberButtons = document.querySelectorAll('[data-number]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-all-clear]')
const deleteButton = document.querySelector('[data-delete]')
const previousOperandTextElement = document.querySelector('[data-previous]')
const currentOperandTextElement = document.querySelector('[data-current]')

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  formatDisplayNumber(number) {
    const stringNumber = number.toString()

    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]

    let integerDisplay

    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0,
      })
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  calculate() {
    let result

    const previousOperandFloat = parseFloat(this.previousOperand)
    const currentOperandFloat = parseFloat(this.currentOperand)

    if (isNaN(previousOperandFloat) || isNaN(currentOperandFloat)) return

    switch (this.operation) {
      case '+':
        result = previousOperandFloat + currentOperandFloat
        break
      case '-':
        result = previousOperandFloat - currentOperandFloat
        break
      case '*':
        result = previousOperandFloat * currentOperandFloat
        break
      case '/':
        result = previousOperandFloat / currentOperandFloat
        break
      default:
        return
    }

    this.currentOperand = result
    this.operation = undefined
    this.previousOperand = ''
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return

    if(this.previousOperand !== '') {
      this.calculate()
    }
    this.operation = operation

    this.previousOperand = this.currentOperand
    this.currentOperand = ""
  }

  appendNumber(number) {
    if (this.currentOperand.includes(".") && number === ".") return

    this.currentOperand = `${this.currentOperand}${number.toString()}`
  }

  clear() {
    this.previousOperand = ''
    this.currentOperand = ''
    this.operation = undefined
  }
  
  updateDisplay() {
    this.previousOperandTextElement.innerText = `${this.formatDisplayNumber(this.previousOperand)} ${this.operation || ''}`
    this.currentOperandTextElement.innerText = this.formatDisplayNumber(this.currentOperand)
  }
}

const calculator = new Calculator(
  previousOperandTextElement, 
  currentOperandTextElement
)

for (const numberButton of numberButtons){
  numberButton.addEventListener('click', () => {
    calculator.appendNumber(numberButton.innerText)
    calculator.updateDisplay()
  })
}

for (const operationButton of operatorButtons) {
  operationButton.addEventListener('click', () => {
    calculator.chooseOperation(operationButton.innerText)
    calculator.updateDisplay()
  })
}

clearButton.addEventListener('click', () => {
  calculator.clear()
  calculator.updateDisplay()
})

equalsButton.addEventListener('click', () => {
  calculator.calculate()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', () => {
  calculator.delete()
  calculator.updateDisplay()
})
