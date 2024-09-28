const API_URL = "https://freetestapi.com/api/v1/movies";
const SEARCH_API = "https://freetestapi.com/api/v1/movies?search=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  displayMovies(data);
}

getMovies(API_URL);

function displayMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { poster, title, rating, plot } = movie;

    const container = document.createElement("div");
    container.classList.add("movie");

    container.innerHTML = `
              <img src="${poster}" alt="${title}">
              <div class="movie-info">
                  <h3>${title}</h3>
                  <span class="${getClassByRate(rating)}">${rating}</span>
              </div>
              <div class="overview">
                  <h3>Overview</h3>
                  ${plot}
              </div> `;

    main.appendChild(container);
  });
}

function getClassByRate(vote) {
  if (vote >= 7) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
