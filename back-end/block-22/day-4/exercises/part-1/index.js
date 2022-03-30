const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./auth-midleware');

const app = express();
app.use(bodyParser.json());

app.post('/user/register',authMiddleware, function (req, res) {
  const { username } = req.body;
  if( username.length < 4 ) return res.status(400).json({ "message": "invalid data username" });
  res.status(201).json({ "message": "user created" });
});

app.post('/user/login',authMiddleware, function (_req, res) {
  const token = Math.random().toString(16).substr(3);
  res.status(200).json({ "token": token });
});

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
console.log('Aplicação ouvindo na porta 3001');
});
