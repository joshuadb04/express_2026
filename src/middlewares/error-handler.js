const notFoundHandler = (req, res, next) => {
  res.status(404).json({ message: "Not found" });
};

const errorHandler = (err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    message: err.message,
  });
};

export { notFoundHandler, errorHandler };
