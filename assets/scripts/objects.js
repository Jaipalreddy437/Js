const addMovieButton = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn")
const movies = [];

const renderMovies = (filter = "") => {
    const movieList = document.getElementById("movie-list");
    if (movies.length !== 0) {
        movieList.classList.add("visible");
    }
    movieList.innerHTML = "";
    const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter))
    filteredMovies.map(movie => {
        const movieEl = document.createElement("li");
        let text = movie.info.title + "-";
        for (const key in movie.info) {
            if (key !== "title") {
                text += `${key} : ${movie.info[key]}`
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl)
    })

}

const addMovieHandler = () => {
    let title = document.getElementById("title").value;
    let extraName = document.getElementById("extra-name").value;
    let extraValue = document.getElementById("extra-value").value;
    if (
        title.trim() === "" ||
        extraName.trim() === "" ||
        extraValue.trim() === "") {
        alert("Please enter valid data");
        return;
    }
    const newMovie = {
        info: {
            title,
            [extraName]: extraValue
        },
        id: Math.random(),
    }

    movies.push(newMovie);
    renderMovies();
}

const searchMovieHandler = () => {
    const filtered = document.getElementById("filter-title");
    renderMovies(filtered);
}

addMovieButton.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler)
