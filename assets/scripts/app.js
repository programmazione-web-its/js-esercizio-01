const defaultResult = 0
let currentResult = defaultResult

function add() {
  const enteredNumber = userInput.value
  const calcDescription = `${currentResult} + ${enteredNumber}`
  currentResult = currentResult + enteredNumber
  outputResult(currentResult, calcDescription)
}

addBtn.addEventListener('click', add)
