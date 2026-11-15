const express = require('express');
const app = express()
const port = 3000

const routerFilms = require("./routes/film_router")

app.use(express.urlencoded({ extended: true }));
app.use("", routerFilms)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})