const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
firstDiv.addEventListener('click', addClassTech);
secondDiv.addEventListener('click', addClassTech);
thirdDiv.addEventListener('click', addClassTech);

function addClassTech(event) {
    let techElement = document.getElementsByClassName('tech')[0];
    techElement.classList.remove('tech');
    event.target.classList.add('tech');
    // input.value = '';    
}


// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstDiv.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.