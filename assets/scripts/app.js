const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const addMovieModal = document.getElementById("add-modal");
const confirmAddMovieButton = addMovieModal.querySelector(".btn--success");
const cancelAddMovieButton = confirmAddMovieButton.previousElementSibling;
const userInputs = document.querySelectorAll("input");
const movies = [];

const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
}

const showMovieModal = () => {
    addMovieModal.classList.add("visible");
    toggleBackdrop();
}

const renderNewMovieElement = () => {
    const newMovieElement = document.createElement("li");
    newMovieElement.className = "movie-element";
    newMovieElement.innerHTML = `<div class="movie-element__image">
       <img src="${imageUrl}" alt="${title}" />
    </div>
    <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 Stars</p>
    </div>
    `
    const listRoot = document.getElementById("movie-list");
    listRoot.appendChild(newMovieElement);

}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue.trim() === "" ||
        imageUrlValue.trim() ||
        +ratingValue.trim() === "" ||
        +ratingValue < 1 || +ratingValue > 5
    ) {
        alert("invalid enter!");
        return;
    }

    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    }
    movies.push(newMovie);
    renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating)
}

startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backDropClickHandler);