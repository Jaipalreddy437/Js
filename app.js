// // const listItems = document.querySelectorAll("li");
// // console.log(listItems);

// // const arrayFromItems = Array.from(listItems);
// // console.log(arrayFromItems);

// const hobbies = ["cooking", "playing"];

// const mixedArray = [30, "Max", { more: ["Full-stock Developer"] }];
// console.log(mixedArray);

// const multiArray = [[1, 1.4], [-5, 3]];

// // for (const data of multiArray) {
// //     for (const dataPoint of data) {
// //         console.log(dataPoint);
// //     }
// // }

// console.log(mixedArray[2].more[0]);

// const testResults = [2, 3, 4, 6, 78, 7, 0, 4, 2.4];
// const storedResults = testResults.concat(["reddy", "Shilpa"]);
// testResults.push("Jai");
// console.log(storedResults.lastIndexOf(4));

const person = [{ name: "Jaipal" }, { name: "Shilpa" }];
// console.log(person.indexOf({ name: "Shilpa" }));
const manuel = person.find((person, idx, persons) => {
    return person.name === "Shilpa";
})
manuel.name = "Naga";
console.log(manuel);
const personData = person.findIndex((person, idx, persons) => {
    return person.name === "Shilpa";
})

console.log(personData);