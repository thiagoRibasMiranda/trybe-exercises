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

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params; 
  const simpsons = await getSimpsons();
  const simpson = simpsons.find((element) => element.id = id);
  // console.log(simpsons);
  if(!simpson) return res.status(500);
  res.status(200).json(simpson);
})

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));


