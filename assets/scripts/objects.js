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
        const { info, ...otherProps } = movie;
        let { getFormatTitle } = movie;
        // const { title: movieTitle } = info;
        // getFormatTitle = getFormatTitle.bind(movie)

        let text = getFormatTitle.apply(movie) + " - ";
        for (const key in info) {
            if (key !== "title" && key !== "_title") {
                text += `${key} : ${info[key]}`
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
        extraName.trim() === "" ||
        extraValue.trim() === "") {
        alert("Please enter valid data");
        return;
    }
    const newMovie = {
        info: {
            set title(val) {
                if (val.trim() === "") {
                    this._title = "DEFAULT";
                    return;
                }
                this._title = val;
            },
            get title() {
                return this._title;
            },
            [extraName]: extraValue
        },
        id: Math.random().toString(),
        getFormatTitle() {
            return this.info.title.toUpperCase();
        }
    }

    newMovie.info.title = title;

    movies.push(newMovie);
    renderMovies();
}

const searchMovieHandler = () => {
    const filtered = document.getElementById("filter-title").value;
    renderMovies(filtered);
}

addMovieButton.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler)


