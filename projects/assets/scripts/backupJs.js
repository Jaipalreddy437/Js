const startMovieButton = document.querySelector("header button");
const addMovieModal = document.getElementById("add-modal");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const deleteModal = document.getElementById("delete-modal");

const movies = [];

// updating the DOM 
const updateUi = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = "block";
    } else {
        entryTextSection.style.display = "none";
    }
}

// deleting item
const deleteMovieMovieHandler = (movieId) => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    const listRoot = document.getElementById("movie-list");
    listRoot.children[movieIndex].remove();
}

// delete confirmation
const startDeleteMovieHandler = (movieId) => {
    deleteModal.classList.add("visible");
    toggleBackdrop();
    const cancelDeletionButton = deleteModal.querySelector(".btn--passive")
    let confirmDeletionButton = deleteModal.querySelector(".btn--danger")

    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
    confirmDeletionButton = deleteModal.querySelector(".btn--danger");

    // confirmAddMovieButton.removeEventListener("click", deleteMovieMovieHandler.bind(null, movieId)); // will not work
    cancelAddMovieButton.removeEventListener("click", closeMovieDeletionModal)

    cancelDeletionButton.addEventListener("click", closeMovieDeletionModal)
    confirmDeletionButton.addEventListener("click", deleteMovieMovieHandler.bind(null, movieId));

}

// creating list elements
const renderNewMovieElement = (id, imageUrl, title, rating) => {
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
    newMovieElement.addEventListener("click", startDeleteMovieHandler.bind(null, id))
    const listRoot = document.getElementById("movie-list");
    listRoot.appendChild(newMovieElement);
}

// closing delete modal and backdrop toggle
const closeMovieDeletionModal = () => {
    toggleBackdrop();
    deleteModal.classList.remove("visible")
}

// backdrop toggle 
const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
}

// close the backdrop 
const removeBackdropHandler = () => {
    backdrop.classList.remove("visible");
}

//close the add modal
const closeMovieModal = () => {
    addMovieModal.classList.remove("visible");
}

// show the add modal and backdrop toggle
const showMovieModal = () => {
    addMovieModal.classList.add("visible");
    toggleBackdrop();
}

// close the add modal, backdrop toggle and clear the inputs
const cancelAddMovieHandler = () => {
    closeMovieModal();
    toggleBackdrop();
    clearMovieInputs();
}

// clearing input fields
const clearMovieInputs = () => {
    for (const userInput of userInputs) {
        userInput.value = "";
    }
}

//  validate inputs
const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (titleValue.trim() === "" ||
        imageUrlValue.trim() === "" ||
        ratingValue.trim() === "" ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ) {
        alert("Please enter a valid values (rating between 1 to 5)");
        return;
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        imageUrl: imageUrlValue,
        rating: ratingValue
    }

    movies.push(newMovie);
    closeMovieModal();
    clearMovieInputs();
    renderNewMovieElement(newMovie.id, newMovie.imageUrl, newMovie.title, newMovie.rating)
    updateUi();
    removeBackdropHandler();
}

// close the all modals 
const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
    clearMovieInputs();
}

startMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler)

