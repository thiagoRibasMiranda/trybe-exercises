const express = require('express');
const bodyParser = require('body-parser');
const { getSimpsons } = require('./fs-utils');

const app = express();
app.use(bodyParser.json());

app.get('/simpsons', async (_req, res) => {
  const simpsons = await getSimpsons();
  console.log(simpsons);
  if(!simpsons) return res.status(500);
  res.status(200).json(simpsons);
})

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));


