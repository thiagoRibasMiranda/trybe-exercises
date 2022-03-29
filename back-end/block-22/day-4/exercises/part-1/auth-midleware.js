const authMiddleware = (req, res, next) => {
  const { email, password } = req.body;
  const re = /\S+@\S+\.\S+/;
  if( !re.test(email) ) return res.status(400).json({ "message": "invalid data" });
  if( password.length < 4 || password > 8) return res.status(400).json({ "message": "invalid data" });
  next();
}

module.exports(authMiddleware);