const express = require('express');
const router = express.Router();

const fetchAPI = require("../utils/fetch_API");
const { getHome, getFilm, postFilm } = require('../controllers/film_controller');


router.get("", getHome)
router.get("/film/:title", getFilm )
router.post("/film", postFilm)

module.exports = router