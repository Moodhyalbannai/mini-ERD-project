const { model, Schema } = require("mongoose");

const reviewSchema = new Schema({
  comment: { type: String, required: true },
  rating: { type: Number, required: true },
  movie: { type: Schema.Types.ObjectId, ref: "Movie" },
});

module.exports = model("Review", reviewSchema);
