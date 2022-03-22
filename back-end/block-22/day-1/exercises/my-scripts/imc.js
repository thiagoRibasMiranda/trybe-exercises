const peso = 95;
const altura = 183;

const imc = (peso, altura) => {
  const resultado = (peso / ((altura/100) * (altura/100))).toFixed(2);
  return resultado 
}

console.log(imc(peso, altura));