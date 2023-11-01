const Actor = require("../../models/Actor");
const Movie = require("../../models/Movie");

exports.fetchActor = async (actorId, next) => {
  try {
    const actor = await Actor.findById(actorId);
    return actor;
  } catch (error) {
    next(error);
  }
};

exports.getAllActors = async (req, res, next) => {
  try {
    const actor = await Actor.find().populate("movies");
    res.status(200).json(actor);
  } catch (error) {
    next(error);
  }
};

exports.createActors = async (req, res, next) => {
  try {
    const actor = await Actor.create(req.body);
    res.status(201).json(actor);
  } catch (error) {
    next(error);
  }
};

exports.deleteActors = async (req, res, next) => {
  try {
    await req.actor.deleteOne();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.updateActors = async (req, res, next) => {
  try {
    await req.actor.updateOne(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.addMoviesToActors = async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.movieId);
    if (!movie) return res.status(404).json({ message: "Movie Not Found!" });
    await movie.updateOne({ $push: { actors: req.actor } });
    await req.actor.updateOne({ $push: { movies: movie } });
    res.status(201).end();
  } catch (error) {
    next(error);
  }
};
