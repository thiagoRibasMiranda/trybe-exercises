const fs = require('fs').promises;

function getSimpsons() {
  const simpsons = fs.readFile('./simpsons.json', 'utf-8')
    .then(result => JSON.parse(result));
  return simpsons;
}

function setSimpsons(newSimpsons) {
  fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
}

module.exports = { getSimpsons, setSimpsons };