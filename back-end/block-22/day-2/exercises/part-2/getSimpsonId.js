const fs = require('fs').promises;

async function getSimpsonId(id) {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((data) => JSON.parse(data));
  if(simpsons.filter((element) => element.id === id).length === 0) {
    throw new Error('id não encontrado');
  };
};

getSimpsonId("11");