// Requisito 1

let a = 1;
let b =2;

console.log("Soma: " + (a+b));
console.log("Subtração: " + (a-b));
console.log("Multiplicação: " + (a*b));
console.log("Divisão: " + (a/b));
console.log("Módulo: " + (a%b));

// Requisito 2

let c = 3;
let d = 4;

if (c > d) {
    console.log("'c' é maior do que 'd'");
} else {
    console.log("'d' é maior do que 'c'");
}

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
}