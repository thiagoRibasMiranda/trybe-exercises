const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';
const doingThings = (func) => console.log(func());
// Ao chamar a função doingThings:
doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!