const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => {
  // Adiciona seu código aqui
  if (number % 3 === 0 && number % 5 === 0) {
    return number;
  }
}
console.log(numbers.find(findDivisibleBy3And5));