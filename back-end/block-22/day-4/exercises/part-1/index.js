const express = require('express');
const bodyParser = require('bodyParser');
const authMiddleware = require('./auth-midleware');

const app = express();
app.use(bodyParser.json());

app.post('/user/register', authMiddleware, function (req, res) {
  const { username } = req.body;
  if( username.length < 4 ) return res.status(400).json({ "message": "invalid data" });
  res.status(201).json({ "message": "user created" });
});

