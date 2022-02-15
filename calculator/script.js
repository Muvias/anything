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

  chooseOperation(operation) {

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
    this.previousOperandTextElement.innerText = this.previousOperand
    this.currentOperandTextElement.innerText = this.currentOperand
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

clearButton.addEventListener('click', () => {
  calculator.clear()
  calculator.updateDisplay()
})

