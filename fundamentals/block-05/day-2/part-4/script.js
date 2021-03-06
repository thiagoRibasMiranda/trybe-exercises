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
// 6. Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let rightContent = document.createElement('div');
rightContent.classList.add('right-content');
mainContent.appendChild(rightContent);
// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.classList.add('small-image');
leftContent.appendChild(image);
// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let numbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];
let listaUl = document.createElement('ul');
rightContent.appendChild(listaUl);
for (let index = 0; index < numbers.length; index +=1) {
    const li = document.createElement('li');
    li.innerText = numbers[index];
    listaUl.appendChild(li);    
}
// 9. Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
for (let index = 1; index <= 3; index += 1) {
    let h3 = document.createElement('h3');
    h3.innerText = index;
    mainContent.appendChild(h3);
}
// Parte 2

// 1. Adicione a classe title na tag h1 criada;
h1.classList.add('title');
// 2. Adicione a classe description nas 3 tags h3 criadas;
let h3AddClass = document.querySelectorAll('h3');
h3AddClass.classList.add('description');
// 3. Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild();
mainContent.removeChild(leftContent);
// 4. Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
rightContent.style.marginRight = 'auto';
// 5.Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
const divCenterContent = document.querySelector('.center-content');
divCenterContent.parentNode.style.backgroundColor = 'green';
// 6.Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
ul.lastChild.remove();
ul.lastChild.remove();