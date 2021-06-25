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

// Requisito 6

  let peca = 'rainha';

  switch (peca.toLowerCase()) {
    case 'rei': 
    console.log('Rei -> uma casa apenas para qualquer direção.');
    break;
    case 'bispo':
      console.log('Bispo -> Diagonal');
    break;
    case 'rainha':
      console.log('Rainha-> Diagonal, horizontal e vertical.');
      break;
    case 'cavalo':
      console.log('Cavalo -> "L" pode pular sobre as peças.');
      break;
    case 'torre':
      console.log('Torre -> Horizontal e vertical.');
      break;
    case 'peão':
      console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
      break;
    default:
      console.log('Erro: Peça inválida');
      break;
  }

//Requisito 7

  let nota = 35;

  if (nota > 100 || nota < 0) {
    console.log('Erro: nota inválida!')
  }  else if (nota >= 90) {
    console.log('A');
  } else if (nota >= 80) {
    console.log('B');
  } else if (nota >= 70) {
    console.log('C');
  } else if (nota >= 60) {
    console.log('D');
  } else if (nota >= 50) {
    console.log('E');
  } else {
    console.log('F');
  }

// Requisito 8

let l = 12
let m = 13
let n = 14

if (l % 2 === 0 || m % 2 === 0 || n % 2 === 0) {
  console.log('true');
} else {
  console.log('false');
}

// Requisito 9

let o = 15
let p = 16
let r = 18

if (o % 2 !== 0 || p % 2 !== 0 || r % 2 !== 0) {
  console.log('true');
} else {
  console.log('false');
}
// Requisito 10

let custo = 150
let precoVenda = 600

if (custo <= 0 || precoVenda <= 0) {
  console.log('Erro: valor inválido')
} else {
  let valorCustoTotal = custo * 1.20;
  let lucro = (precoVenda - valorCustoTotal) * 1000;
  console.log(lucro);
}

// Requisito 11

let iNSS;
let iR;

let salarioBruto = 3000;

if (salarioBruto <= 1556.94) {
  iNSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  iNSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  iNSS = salarioBruto *0.11;
} else {
  iNSS = 570.88;
}

let salarioBase = salarioBruto - iNSS;

if (salarioBase <= 1903.98) {
  iR = 0
} else if (salarioBase <= 2826.65) {
  iR = (salarioBase * 0.075) - 142.80
}  else if (salarioBase <= 3751.05) {
  iR = (salarioBase * 0.15) - 354.80
} else if (salarioBase <= 4664.68) {
  iR = (salarioBase * 0.225) - 636.13
} else {
  iR = (salarioBase * 0.275) - 869.36
}

let salarioLiquido = salarioBase - iR

console.log(salarioLiquido)