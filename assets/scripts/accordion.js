
//  Accodions DOM

const accordionItem = document.querySelectorAll(".accordion-item");
// const accordionHandler = () => {
//     accordionItem.classList.add("addBorder")
//     // if (accordionItem.contains("addBorder")) {
//     //     accordionItem.classList.remove("addBorder")
//     // }
// }
accordionItem[0].classList.add("addBorder");
for (const element of accordionItem) {
    const button = element.querySelector("button");
    // element.classList.add("addBorder");

    button.addEventListener("click", () => {
        element.classList.remove("addBorder");

        // if (element.classList.contains("addBorder")) {
        // }
        // else {
        //     element.classList.add("addBorder");
        // }
    }
    )
}