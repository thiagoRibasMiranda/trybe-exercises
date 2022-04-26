const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/user', async (req, res) => {
  const { firstName,lastName, email, password } = req.body;

  if(!isValid(firstName,lastName, email, password).error) {
    return res.status(400).json(isValid(firstName,lastName, email, password).message);
  }

})

app.listen(3000, () => console.log('Ouvindo a porta 3000'))