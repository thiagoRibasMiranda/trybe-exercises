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

// function indiceMenorValor(vetor) {
//   let menor = vetor[0];
//   let posicao;
//   for(i = 1; i < vetor.length; i += 1) {
//     if(vetor[i] < menor) { 
//       posicao = i;
//     }
//   }  return posicao;
// } console.log(indiceMenorValor([2, 4, 6, 7, 10, 0, -3]));

// function nomeMaior(nomes){
//   let maiorNome = nomes[0];
//   for (let index = 1; index < nomes.length; index += 1) {
//     if (nomes[index].length > maiorNome.length) { 
//       maiorNome = nomes[index];     
//     }
//   } return  maiorNome;
// } console.log(nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// function maisRepete(array) {
//   let cont = 0;
//   let contRepetido = 0;
//   let indexNumeroRepetido = 0; 
//   for (let index = 0; index < array.length; index += 1) {
//     for (let index2 = 0; index2 < array.length; index2 +=1) {
//       if (array[index] === array[index2]) {
//         cont += 1;
//       }
//     }
//     if (cont > contRepetido) {
//       contRepetido = cont;
//       indexNumeroRepetido = index;      
//     }
//     cont = 0;
//   }
//   return array[indexNumeroRepetido];
// } console.log(maisRepete([2, 3, 2, 5, 8, 2, 3]));

function somatorio(n) {
  somaTotal = 0;
  for(let i = 0; i <= n; i += 1) {
    somaTotal = somaTotal + i;
  } return somaTotal
} console.log(somatorio(5));