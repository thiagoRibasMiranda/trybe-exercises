const readline = require('readline-sync');


const sorteio = () => {
  const num = readline.questionInt('Digite um número: ');
  const numAleatorio = parseInt(Math.random() * 10);
  if(numAleatorio === num) {
    console.log('Parabéns, número correto!');
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${numAleatorio}`);
    sorteio();
  }
}

sorteio(); 