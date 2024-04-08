const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post")
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.responseType = "json";
xhr.onload = function () {
    const listOfPosts = xhr.response;
    for (const post of listOfPosts) {
        const listEl = document.importNode(postTemplate.content, true);
        listEl.querySelector("h2").textContent = post.title.toUpperCase();
        listEl.querySelector("p").textContent = post.body;
        listElement.appendChild(listEl);
    }
}
xhr.send();