const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addNewKey = (obj, key, value) => {
  obj[key] = value;
  console.log(obj);
};
addNewKey(lesson2, 'turno', 'manhã');

const listOfObjects = (obj) => {
  console.log(Object.keys(obj));
}
listOfObjects(lesson3);

const lengthObjects = obj => {
  console.log(Object.keys(obj).length);
}
lengthObjects(lesson1);

const listOfValues = obj => Object.values(obj);
console.log(listOfValues(lesson2));

let allLessons = {};
Object.assign(allLessons, {lesson1, lesson2, lesson3});
console.log(allLessons);