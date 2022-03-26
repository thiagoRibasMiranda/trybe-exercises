const fs = require('fs').promises;

async function filterSimpsons() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((data) => JSON.parse(data));
  const newArray = simpsons.filter((element) => element.id != "6" && element.id != "10");
  try {
    await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
  } catch (error) {
    console.error(`Erro ao escrever o arquivo: ${error.message}`);
  }
}

filterSimpsons();