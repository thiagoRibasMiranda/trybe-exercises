// Requisito 1

let a = 1;
let b =2;

console.log('Soma: ' + (a+b));
console.log('Subtração: ' + (a-b));
console.log('Multiplicação: ' + (a*b));
console.log('Divisão: ' + (a/b));
console.log('Módulo: ' + (a%b));

// Requisito 2

let c = 3;
let d = 4;

if (c > d) {
    console.log("'c' é maior do que 'd'");
} else {
    console.log("'d' é maior do que 'c'");
};

// Requisito 3

let e = 5;
let f = 6;
let g = 7;

if (e > f && e > g) {
  console.log('O maior número é: ' + e + ' (e)');
} else if (f > e && f > g) {
  console.log('O maior número é: ' + f + ' (f)');
} else {
  console.log('O maior número é: ' + g + ' (g)');
};

// Requisito 4

let h = 8;

if (h > 0) {
  console.log('positive');
} else if (h < 0) {
  console.log('negative');
} else {
  console.log('zero');
};

// Requisito 5

  let anguloI = 70;
  let anguloJ = 90;
  let anguloK = 20;

  let somaDosAngulos = anguloI + anguloJ + anguloK;

  let todosAngulosSaoPositivos = anguloK > 0 && anguloI > 0 && anguloJ > 0;

  if (todosAngulosSaoPositivos) {
    if (somaDosAngulos === 180) {
      console.log('positive');
    } else {
      console.log('false');
    };
  } else {
    console.log('Erro: ângulo inválido');
  };