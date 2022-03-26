const fs = require('fs').promises;

async function addNelsonToFamily() {
  const nelson = { "id": "8", "name": "Nelson Muntz"};

  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
    .then((data) => JSON.parse(data));

  simpsons.push(nelson);

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsons));
}

addNelsonToFamily();