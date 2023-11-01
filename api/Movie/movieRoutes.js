const express = require("express");
const movies = require("./movieControllers");
const router = express.Router();

router.param("movieId", async (req, res, next, movieId) => {
  const movie = await movies.fetchMovie(movieId, next);
  if (movie) {
    req.movie = movie;
    next();
  } else {
    const err = new Error("Movie Not Found");
    err.status = 404;
    next(err);
  }
});

router.get("/", movies.getAllMovies);
router.post("/", movies.createMovies);
router.delete("/:movieId", movies.deleteMovies);
router.put("/:movieId", movies.updateMovies);

router.post("/:movieId", movies.addReviewsToMovies);

module.exports = router;
