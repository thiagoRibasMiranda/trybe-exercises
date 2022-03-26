const fs = require('fs').promises;

async function getSimpsonId(id) {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((data) => JSON.parse(data));
  const chosenSimpson = simpsons.filter((element) => element.id === id);
  if(chosenSimpson.length === 0) {
    throw new Error('id não encontrado');
  };
  return console.log(chosenSimpson);
};

getSimpsonId("11");