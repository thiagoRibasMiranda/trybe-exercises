const fs = require('fs').promises;

async function createSimpsonsFamily() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

  console.log(simpsons);
  const simpsonsFamily = simpsons.filter(simpson => [1, 2, 3, 4].includes(simpson.id));
  console.log(simpsonsFamily);

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

createSimpsonsFamily();