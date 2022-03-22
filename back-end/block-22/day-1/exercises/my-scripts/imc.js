const readline = require('readline-sync');

// const peso = 95;
// const altura = 183;

const peso = readline.question('Qual é o seu peso? ');
const altura = readline.questionInt('Qual é a sua altura em centimetros? ');

const imc = (peso, altura) => {
  const resultado = (peso / ((altura/100) * (altura/100))).toFixed(2);
  return resultado 
}

console.log(imc(peso, altura));