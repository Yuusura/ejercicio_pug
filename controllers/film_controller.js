const fetchAPI = require("../utils/fetch_API")

//http://localhost:3000
async function getHome(req, res) { //1º página principal HOME
    res.render("home.pug")
}

//http://localhost:3000/film
//Enlazado con la vista "home.pug" y recibe la película buscada en el input
async function postFilm(req, res) { //2º Buscar película
    const film = req.body.filmName
    res.redirect(`/film/${film}`)
}

//http://localhost:3000/film/:title
async function getFilm(req, res) { //3º Ver resultado
    const filmTitle = req.params.title
    const film = await fetchAPI(filmTitle);
    res.render("film.pug", { title: film.Title, author: film.Director, description: film.Plot, image: film.Poster});
}


module.exports = {
    getHome,
    getFilm,
    postFilm
}