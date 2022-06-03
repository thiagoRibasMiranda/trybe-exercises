import Person from "./Person";
import Student from "./Student";
import IEmployee from "./Employee";

const casimiro = new Person('Casimiro',new Date('1980/01/25'));
const gaules = new Student('Gau', new Date('1944/04/04'));

gaules.examsGrades = [41, 44, 42, 45];
gaules.worksGrades = [44, 45];

console.log(casimiro);
console.log(gaules);


const testInterfaceEmployee: IEmployee = {
  registration: 'casicb124512598',
  salary: 3000,
  admissionDate: new Date(),

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FNC${randomStr}`;
  }
}

console.log(testInterfaceEmployee);