let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numerosImpar = 0;

for(let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        numerosImpar += 1;
    }
}

if (numerosImpar === 0) {
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log('A quantidade de números ímpares é igual a: ', numerosImpar);
};