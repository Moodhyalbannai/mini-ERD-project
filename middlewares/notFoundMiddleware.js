const notFoundMiddleware = (req, res, next) => {
  res.status(404).json({ message: "Path not found" });
  next(error);
};

module.exports = { notFoundMiddleware };
