//3 Variable kalkulasi
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'


//calculator screen
const calculatorScreen = document.querySelector('.calculator-screen')

//input number
const inputNumber = (number) => {
	if (currentNumber === '0') {
		currentNumber = number
	} else {
		currentNumber += number
	}
}

//update screen
const updateScreen = (number) => {
	calculatorScreen.value = number
}

//number
const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
	number.addEventListener("click", (event) => {
		inputNumber(event.target.value)
		updateScreen(currentNumber)
	})
})

//input operator
const inputOperator = (operator) => {
	if (calculationOperator === '') {
		prevNumber = currentNumber
	}
	calculationOperator = operator
	currentNumber = '0'
}

//calculation
const calculate = () => {
	let result = ''
	switch(calculationOperator) {
		case "+":
			result = parseFloat(prevNumber) + parseFloat(currentNumber)
			break
		case "-":
			result = prevNumber - currentNumber
			break
		case "*":
			result = prevNumber * currentNumber
			break
		case "/":
			result = prevNumber / currentNumber
			break
		default:
			return		
	}
	currentNumber = result
	calculationOperator = ''
}

//operator
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
	operator.addEventListener("click", (event) => {
		//jalankan fungsi inputOperator
		inputOperator(event.target.value)
	})
})

//equal sign
const equalSign = document.querySelector(".equal-sign")

equalSign.addEventListener("click", () => {
	calculate()
	updateScreen(currentNumber)
})


//all clear btn
const clearAll = () => {
	prevNumber = ''
	calculationOperator = ''
	currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
	clearAll()
	updateScreen(currentNumber)
})

//input decimal
inputDecimal = (dot) => {
	if(currentNumber.includes('.')) {
		return
	}
	currentNumber += dot
}
//desimal

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
	inputDecimal(event.target.value)
	updateScreen(currentNumber)
})

//Frontend Developer FGA 2022