// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(h1);
// Adicione a tag div com a classe main-content como filho da tag body;
let mainContent = document.createElement('div');
mainContent.classList.add('main-content');
document.body.appendChild(mainContent);