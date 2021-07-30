const assert = require('assert');
// escreva a função sumAllNumbers aqui
let soma = 0;
const sumAllNumbers = array => {
  for (let index = 0; index < array.length; index++) {
    soma += array[index];
  }
  return soma;
}
const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);