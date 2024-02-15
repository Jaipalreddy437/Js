const h1 = document.getElementById("main-title");
h1.textContent = "User entered something!";
h1.style.color = "#fff";
h1.style.backgroundColor = "#000";

const ul = document.querySelector("ul");
const li = ul.querySelector("li:last-of-type");
// const lst = li.querySelector("li:last-of-type");

li.textContent = li.textContent + " Changed!"