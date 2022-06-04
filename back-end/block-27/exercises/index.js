"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
const Student_1 = __importDefault(require("./Student"));
const Subject_1 = __importDefault(require("./Subject"));
const Teacher_1 = __importDefault(require("./Teacher"));
const casimiro = new Person_1.default('Casimiro', new Date('1980/01/25'));
const gaules = new Student_1.default('Gau', new Date('1944/04/04'));
gaules.examsGrades = [41, 44, 42, 45];
gaules.worksGrades = [44, 45];
console.log(casimiro);
console.log(gaules);
const testInterfaceEmployee = {
    registration: 'casicb124512598',
    salary: 3000,
    admissionDate: new Date(),
    generateRegistration() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `FNC${randomStr}`;
    }
};
console.log(testInterfaceEmployee);
const math = new Subject_1.default('Matemática');
console.log(math);
const marta = new Teacher_1.default('Marta da Silva', new Date('1980/03/30'), 2000, math);
console.log(marta);
