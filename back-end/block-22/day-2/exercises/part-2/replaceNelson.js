const fs = require('fs').promises;

async function replaceNelson() {
  const simpsons = await fs.readFile('./simpsonsFamily.json', 'utf-8')
    .then((data) => JSON.parse(data));

  const newArray = simpsons.filter((element) => element.id != "8");

  const nelson = { "id": "8", "name": "Maggie Simpson"};
  newArray.push(nelson);

  fs.writeFile('./simpsonsFamily.json', JSON.stringify(newArray));
}

replaceNelson();