const { model, Schema } = require("mongoose");

const actorSchema = new Schema({
  name: { type: String, required: true },
  gender: String,
  movies: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
  image: String,
});

module.exports = model("Actor", actorSchema);
