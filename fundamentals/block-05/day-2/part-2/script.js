// 1. Crie um irmão para `elementoOndeVoceEsta.
const pai = document.getElementById('pai');
const irmaoDoElementoOndeVoceEsta = document.createElement('div');
irmaoDoElementoOndeVoceEsta.id = 'irmaoDoElementoOndeVoceEsta';
pai.appendChild(irmaoDoElementoOndeVoceEsta);
// 2. Crie um filho para elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoDoElementoOndeVoceEsta = document.createElement('div');
filhoDoElementoOndeVoceEsta.id = 'filhoDoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(filhoDoElementoOndeVoceEsta);
// 3.Crie um filho para primeiroFilhoDoFilho.
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const filhoDoPrimeiroFilhoDoFilho = document.createElement('div');
filhoDoPrimeiroFilhoDoFilho.id = 'filhoDoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);
// 4. A partir desse filho criado, acesse terceiroFilho.
const terceiroFilho = filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);