const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());

app.get('/', (_req,res) => {
  res.send('Hello World');
});

const langs = ['HTML', 'CSS', 'JS', 'React'];

app.get('/langs', (req, res) => {
  res.send(langs);
});

app.post('/langs', (req, res) => {
  const { name } = req.body;
  langs.push(name);
  res.send(`Linguagem ${name} acionada com sucesso!`);
})

app.listen(3000, () => console.log("App rodando na porta 3000!"));