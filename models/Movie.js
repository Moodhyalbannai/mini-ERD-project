const { model, Schema } = require("mongoose");

const movieSchema = new Schema({
  title: { type: String, required: true },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  actors: [{ type: Schema.Types.ObjectId, ref: "Actor" }],
});

module.exports = model("Movie", movieSchema);
