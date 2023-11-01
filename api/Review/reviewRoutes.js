const express = require("express");
const { getAllReviews } = require("./reviewControllers");
const router = express.Router();

router.get("/", getAllReviews);

module.exports = router;
