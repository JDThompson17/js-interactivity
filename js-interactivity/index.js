document.querySelector("form").addEventListener("submit", addMovie);
const message = document.querySelector("#message")
function addMovie (event) {
    event.preventDefault()
    const inputField = document.querySelector("input");
    const movie =  document.createElement("li");
    const movieTitle = document.createElement("span");
    movieTitle.textContent=inputField.value;
    movieTitle.addEventListener("click", crossOffMovie)
    movie.appendChild(movieTitle);
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Sike I lied, THATS DA WRONG NUMBA!!!!";
    deleteBtn.addEventListener("click", deleteMovie);
    movie.appendChild(deleteBtn);
    document.querySelector("ul").appendChild(movie);
    document.inputField.value("");
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = "Movie deleted";

}

function crossOffMovie(event){
    event.target.classList.toggle("checked");
    if (event.target.classList.contains("checked")==="true") {
        message.textContent = "Already seen it"
    }else {
    message.textContent = "we put it back so you can watch it later"
    }
}
