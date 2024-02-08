const defaultResult = 0;
let currentResult = defaultResult;
const logDetails = document.querySelector(".logDetails")
let logEntries = [];

function getUserEnteredValue() {
    return parseInt(userInput.value);
}

function createWriteLog(operator, beforeCalcDescription, calcNumber) {
    const calculationDescription = `${beforeCalcDescription} ${operator} ${calcNumber}`;
    outputResult(currentResult, calculationDescription); //from vendor
}

function writeLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult,
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}


function add() {
    const enteredNumber = getUserEnteredValue();
    const beforeCalc = currentResult;
    currentResult = currentResult + enteredNumber;
    createWriteLog("+", beforeCalc, enteredNumber);
    writeLog("ADD", beforeCalc, enteredNumber, currentResult);

}
function subtract() {
    const enteredNumber = getUserEnteredValue();
    const beforeCalc = currentResult;
    currentResult = currentResult - enteredNumber;
    createWriteLog("-", beforeCalc, enteredNumber);
    writeLog("SUBTRACT", beforeCalc, enteredNumber, currentResult);

}
function multiply() {
    const enteredNumber = getUserEnteredValue();
    const beforeCalc = currentResult;
    currentResult = currentResult * enteredNumber;
    createWriteLog("*", beforeCalc, enteredNumber);
    writeLog("MULTIPLY", beforeCalc, enteredNumber, currentResult);

}
function divide() {
    const enteredNumber = getUserEnteredValue();
    const beforeCalc = currentResult;
    currentResult = currentResult / enteredNumber;
    createWriteLog("/", beforeCalc, enteredNumber);
    writeLog("DIVIDE", beforeCalc, enteredNumber, currentResult);

}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
