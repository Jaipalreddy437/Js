const startMovieButton = document.querySelector("header button");
const addMovieModal = document.getElementById("add-modal");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
const movies = [];

const updateUi = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = "block";
    } else {
        entryTextSection.style.display = "none";
    }
}

const deleteMovie = (movieId) => {
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

const deleteMovieHandler = (movieId) => {
    const deleteModal = document.getElementById("delete-modal");
    deleteModal.classList.add("visible");
    toggleBackdrop();
    // deleteMovie(movieId)
    //older way of deleteing 
    // listRoot.removeChild(listRoot.children[movieIndex]);

}

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
    newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id))
    const listRoot = document.getElementById("movie-list");
    listRoot.appendChild(newMovieElement);
}

const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
}

const closeMovieModal = () => {
    addMovieModal.classList.remove("visible");

}

const showMovieModal = () => {
    addMovieModal.classList.add("visible");
    toggleBackdrop();
}

const cancelAddMovieHandler = () => {
    closeMovieModal();
    clearMovieInputs();
}

const clearMovieInputs = () => {
    for (const userInput of userInputs) {
        userInput.value = "";
    }
}

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
}
const backdropClickHandler = () => {
    closeMovieModal();
}

// const addListHandler = () => {
//     const li = document.createElement("li");
//     const h2 = document.createElement("h2");
//     const p = document.createElement("p");
//     const div = document.createElement("div");
//     div.className = "movie-element__image";
//     h2.textContent = title;
//     p.textContent = rating;
//     li.appendChild(h2);
//     li.appendChild(p);
//     li.appendChild(div)
//     movieList.appendChild(li);
//     removeHandler();

// }

startMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler)

