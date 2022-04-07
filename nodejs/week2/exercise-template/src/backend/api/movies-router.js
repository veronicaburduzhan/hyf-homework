const { query } = require("express");
const express = require("express");
const router = express.Router();

const movies = require("../data/movies.json");

router.get("/", async (request, response) => {
  const beginYear = request.query.beginYear;
  const endYear = request.query.endYear;
  const minRating = request.query.minRating;
  let filteredMovies;
  if (beginYear && endYear) {
    if (minRating) {
      filteredMovies = movies.filter(
        (movie) =>
          movie.year >= beginYear &&
          movie.year <= endYear &&
          movie.rating >= minRating
      );
    } else {
      filteredMovies = movies.filter(
        (movie) => movie.year >= beginYear && movie.year <= endYear
      );
    }
    response.send({ data: [filteredMovies] });
  } else if (!beginYear || !endYear) {
    response.send("You should specify both - the begin year and the end year");
  } else {
    response.send({ data: [movies] });
  }
});

router.get("/:id", async (request, response) => {
  response.send({ data: movies[request.params.id - 1] });
});

module.exports = router;