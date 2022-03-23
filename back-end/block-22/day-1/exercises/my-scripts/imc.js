const readline = require('readline-sync');

// const peso = 95;
// const altura = 183;

const peso = readline.question('Qual é o seu peso? ');
const altura = readline.questionInt('Qual é a sua altura em centimetros? ');

const imc = (peso, altura) => {
  const resultado = (peso / ((altura/100) * (altura/100))).toFixed(2);
  console.log(`IMC: ${resultado}`);
  if(resultado < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
  }
  if(resultado >= 18.5 && resultado < 25) {
    console.log('Situação: Peso normal');
  }
  if(resultado >= 25 && resultado < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
  }
  if(resultado >= 30 && resultado < 35) {
    console.log('Situação: Obesidade grau I');
  }
  if(resultado >= 35 && resultado < 40) {
    console.log('Situação: Obesidade grau II');
  }
  if(resultado >= 40) {
    console.log('Situação: Obesidade graus III e IV');
  }
}

imc(peso, altura);
