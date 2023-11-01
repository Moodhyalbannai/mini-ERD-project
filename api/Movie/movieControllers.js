const Movie = require("../../models/Movie");
const Review = require("../../models/Review");

exports.fetchMovie = async (movieId, next) => {
  try {
    const movie = await Movie.findById(movieId);
    return movie;
  } catch (error) {
    next(error);
  }
};

exports.getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find().populate("reviews");
    res.status(200).json(movies);
  } catch (error) {
    next(error);
  }
};

exports.createMovies = async (req, res, next) => {
  try {
    const movies = await Movie.create(req.body);
    res.status(201).json(movies);
  } catch (error) {
    next(error);
  }
};

exports.deleteMovies = async (req, res, next) => {
  try {
    await req.movie.deleteOne();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.updateMovies = async (req, res, next) => {
  try {
    await req.movie.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.addReviewsToMovies = async (req, res, next) => {
  try {
    req.body.movie = req.movie._id;
    const newReview = await Review.create(req.body);
    await req.movie.updateOne({ $push: { reviews: newReview } });
    res.status(201).json(newReview);
  } catch (error) {
    next(error);
  }
};
