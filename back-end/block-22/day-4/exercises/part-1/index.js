const express = require('express');
const bodyParser = require('body-parser');
const {authMiddleware, isValidToken} = require('./auth-midleware');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/user/register', authMiddleware, function (req, res) {
  const { username } = req.body;
  if( username.length < 4 ) return res.status(400).json({ "message": "invalid data username" });
  res.status(201).json({ "message": "user created" });
});

app.post('/user/login', authMiddleware, function (_req, res) {
  const token = Math.random().toString(16).substr(3);
  res.status(200).json({ "token": token });
});

app.get('/btc/price', isValidToken, async function (req, res) {
  const ENDPOINTEXTERNALAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';
  const result = await axios.get(ENDPOINTEXTERNALAPI);

  res.status(200).json(result.data);
});

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001, () => {
console.log('Aplicação ouvindo na porta 3001');
});
