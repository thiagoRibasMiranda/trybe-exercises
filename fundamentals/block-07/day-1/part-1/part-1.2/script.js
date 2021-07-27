const oddsAndEvens = [13, 3, 4, 10, 7, 2];
let ordernedArray = []
const orderArray = () => {
  // oddsAndEvens[0] = 2;
  // oddsAndEvens[1] = 3;
  // oddsAndEvens[2] = 4;
  // oddsAndEvens[3] = 7;
  // oddsAndEvens[4] = 10;
  // oddsAndEvens[5] = 13;
  // return oddsAndEvens;
  ordernedArray = oddsAndEvens.sort();
  return ordernedArray;
}
orderArray();
console.log(`Os números ${ordernedArray} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉