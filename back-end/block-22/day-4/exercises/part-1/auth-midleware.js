const authMiddleware = (req, res, next) => {
  const { email, password } = req.body;
  const re = /\S+@\S+\.\S+/;
  if( !re.test(email) ) return res.status(400).json({ "message": "invalid data email" });
  if( password.length < 4 || password > 8) return res.status(400).json({ "message": "invalid data password" });
  next();
}

module.exports = authMiddleware;
