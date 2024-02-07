const defaultResult = 0;
let currentResult = defaultResult;
const logDetails = document.querySelector(".logDetails")
let logEntries = [];

function getUserEnteredValue() {
    return parseInt(userInput.value);
}

// generates and write calculation log

// function finalResult() {

// }

function createWriteLog(operator, beforeCalcDescription, calcNumber) {
    const calculationDescription = `${beforeCalcDescription} ${operator} ${calcNumber}`;
    outputResult(currentResult, calculationDescription); //from vendor
    const data = {
        result: currentResult,
        desc: calculationDescription
    }
    logEntries.push(data);
    // dataList(logEntries);
    // console.log(logEntries);
    for (const data of logEntries) {
        const dataEl = document.createElement("ul");
        dataEl.innerHTML = `<li>${data.desc}</li><li>${data.result}</li>`;
        logDetails.append(dataEl)
    }
    console.log(logEntries);
}

// function dataList(datalist) {
//     for (const data of datalist) {
//         const dataEl = document.createElement("li");
//         dataEl.innerHTML = `<span>${data.result}</span><span>${data.desc}</span>`
//         logDetails.append(dataEl)
//     }
// }

function add() {
    const enteredNumber = getUserEnteredValue();
    const beforeCalc = currentResult;
    currentResult = currentResult + enteredNumber;
    createWriteLog("+", beforeCalc, enteredNumber);
    // logEntries.push(enteredNumber);
    // console.log(logEntries);
    // finalResult()
    // dataList(logEntries);

}
function subtract() {
    const enteredNumber = getUserEnteredValue();
    const beforeCalc = currentResult;
    currentResult = currentResult - enteredNumber;
    createWriteLog("-", beforeCalc, enteredNumber);
    // logEntries.push(enteredNumber);
    // console.log(logEntries);
}
function multiply() {
    const enteredNumber = getUserEnteredValue();
    const beforeCalc = currentResult;
    currentResult = currentResult * enteredNumber;
    createWriteLog("*", beforeCalc, enteredNumber);
    // logEntries.push(enteredNumber);
    // console.log(logEntries);
}
function divide() {
    const enteredNumber = getUserEnteredValue();
    const beforeCalc = currentResult;
    currentResult = currentResult / enteredNumber;
    createWriteLog("/", beforeCalc, enteredNumber);
    // logEntries.push(enteredNumber);
    // console.log(logEntries);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
