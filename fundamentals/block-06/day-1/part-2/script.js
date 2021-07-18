let states = document.getElementById('state');
let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

for (let index = 0; index < stateOptions.length; index += 1) {
    let element = document.createElement('option');
    element.innerText = stateOptions[index];
    element.value = stateOptions[index];
    states.appendChild(element);    
}

function handleSubmit(event) {
    event.preventDefault();
    //validar os dados
    let name = document.querySelector('[name=name]');
    //verificar maxLength e Require
    if(name.value.length > 40 || name.value.length === 0) {
        alert('Nome inválido')
    }
} 

window.onload = function () {
    let button = document.querySelector('.submit-button');
    button.addEventListener('click', handleSubmit);
}