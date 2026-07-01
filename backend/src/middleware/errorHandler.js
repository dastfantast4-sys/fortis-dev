const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.code === 11000) {
    return res.status(400).json({ error: 'Email already exists' });
  }

  if (err.isJoi) {
    return res.status(400).json({ error: err.details[0].message });
  }

  res.status(500).json({ error: 'Internal Server Error' });
};

module.exports = errorHandler;
