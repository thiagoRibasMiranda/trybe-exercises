import Person from "./Person";
import Student from "./Student";

const casimiro = new Person('Casimiro',new Date('1980/01/25'));
const gaules = new Student('Gau', new Date('1944/04/04'));

gaules.examsGrades = [41, 44, 42, 45];
gaules.worksGrades = [44, 45];

console.log(casimiro);
console.log(gaules);