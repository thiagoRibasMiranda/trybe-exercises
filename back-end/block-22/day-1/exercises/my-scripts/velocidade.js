const readline = require('readline-sync');

const distancia = readline.questionInt('Digite a velocidade (m): ');
const tempo = readline.questionInt('Digite o tempo (s): ');

const velocidade = (distancia, tempo) => {
  const resultado = (distancia / tempo).toFixed(2);
  console.log(`A velocidade média é: ${resultado} m/s`);
}

velocidade(distancia, tempo);