// function verificaPalindrome(palavra) {
//   let palavraInvertida = '';
//   for(let index = palavra.length -1; index >= 0; index -= 1) {
//     palavraInvertida += palavra[index];
//   }
//   if(palavraInvertida === palavra) {
//     return true;
//   } else {
//     return false;
//   }
// } console.log(verificaPalindrome('cachorro'));

// function indiceMaiorValor(vetor) {
//   let maior = vetor[0];
//   let posicao;
//   for(i = 1; i < vetor.length; i += 1) {
//     if(vetor[i] > maior) { 
//       posicao = i;
//     }
//   }  return posicao;
// } console.log(indiceMaiorValor([2, 3, 6, 7, 10, 1]));

function indiceMenorValor(vetor) {
  let menor = vetor[0];
  let posicao;
  for(i = 1; i < vetor.length; i += 1) {
    if(vetor[i] < menor) { 
      posicao = i;
    }
  }  return posicao;
} console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3]));