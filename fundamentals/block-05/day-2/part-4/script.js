// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(h1);
// 2.  Adicione a tag div com a classe main-content como filho da tag body;
let mainContent = document.createElement('div');
mainContent.classList.add('main-content');
document.body.appendChild(mainContent);
// 3. Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let centerContent = document.createElement('div');
centerContent.classList.add('center-content');
mainContent.appendChild(centerContent);
// 4. Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let paragraph = document.createElement('p');
paragraph.innerText = 'Algum Texto';
centerContent.appendChild(paragraph);
// 5. Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let leftContent = document.createElement('div');
leftContent.classList.add('left-content');
mainContent.appendChild(leftContent);