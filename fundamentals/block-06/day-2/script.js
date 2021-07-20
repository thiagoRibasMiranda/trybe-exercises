let states = document.getElementById('state');
let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

for (let index = 0; index < stateOptions.length; index += 1) {
    let element = document.createElement('option');
    element.innerText = stateOptions[index];
    element.value = stateOptions[index];
    states.appendChild(element);    
}
var picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'D/M/YYYY',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
});
// function handleSubmit(event) {
//     event.preventDefault();
//     //validar os dados
//     let name = document.querySelector('[name=name]');
//     //verificar maxLength e Require
//     if(name.value.length > 40 || name.value.length === 0) {
//         alert('Nome inválido')
//     }
// } 

// window.onload = function () {
//     let button = document.querySelector('.submit-button');
//     button.addEventListener('click', handleSubmit);
// }