// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maçã', 'uva', 'pera'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['tomate', 'banana', 'goiaba'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));