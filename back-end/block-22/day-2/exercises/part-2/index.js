const fs = require('fs').promises;

const nomeDoArquivo = './simpsons.json';

fs.readFile(nomeDoArquivo, 'utf-8')
  .then((data) => {
    return JSON.parse(data);
  })
  .then((simpsons) => {
    return simpsons.map((simpson) => `${simpson.id} - ${simpson.name}`);
  })
  .then((strings) => {
    strings.forEach(element => {
      console.log(element);
    });
  });