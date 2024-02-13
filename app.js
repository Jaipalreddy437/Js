// const sumUp = (...number) => {
//     const validateNumber = (number) => {
//         return isNaN(number) ? 0 : number;
//     }
//     let sum = 0;
//     for (let num of number) {
//         sum = sum + validateNumber(num);
//     }
//     return sum;
// }
// console.log(sumUp(10, 2, 4, 5, 6, 7));


const sumUp = (resultHandler, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    }
    let sum = 0;
    for (const num of numbers) {
        sum += validateNumber(num);
    }
    resultHandler(sum);
}

const showResult = (result) => {
    console.log("Result is ", result)
}
sumUp(showResult, 2, 5, 7);