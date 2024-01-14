let currentValue = '';
let previousValue = '';
let operator = '';

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')



numberButtons.forEach(function(number){
    number.addEventListener('click', function updateDisplay(){
        const displayElement = document.getElementById('display')
            displayElement.textContent = currentValue;
})
})


function appendToDisplay(){
    currentValue += number.value;

    console.log(currentValue);
    updateDisplay()
}

