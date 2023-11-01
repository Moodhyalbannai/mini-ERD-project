const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./database");
const { notFoundMiddleware } = require("./middlewares/notFoundMiddleware");
const { errorHandlerMiddleware } = require("./middlewares/errorHandler");
const moviesRoutes = require("./api/Movie/movieRoutes");
const actorsRoutes = require("./api/Actor/actorRoutes");
const reviewsRoutes = require("./api/Review/reviewRoutes");
const config = require("./config");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/movies", moviesRoutes);
app.use("/actors", actorsRoutes);
app.use("/reviews", reviewsRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

connectDB();
app.listen(config.PORT, () => {
  console.log("The application is running on localhost", config.PORT);
});
