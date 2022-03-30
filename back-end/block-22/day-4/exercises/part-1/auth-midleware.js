const authMiddleware = (req, res, next) => {
  const { email, password } = req.body;
  const re = /\S+@\S+\.\S+/;
  if( !re.test(email) ) return res.status(400).json({ "message": "invalid data email" });
  if( password.length < 4 || password > 8) return res.status(400).json({ "message": "invalid data password" });
  next();
}
const isValidToken = (req, res, next) => {
  const token = req.headers.authorization;
  const tokenRegex = /^[a-zA-Z0-9]{12}$/;

  if (!token || !tokenRegex.test(token)) {
    return res.status(401).json({ message: 'invalid token' });

    next();
  }
}

module.exports = { authMiddleware, isValidToken};
