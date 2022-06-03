"use strict";
// export default class Person {
Object.defineProperty(exports, "__esModule", { value: true });
//   constructor(private _name: string, private  _birthDate: Date) {
//     this.name = _name;
//     this.birthDate = _birthDate;
//   }
//   get name(): string {
//     return this.name;
//   }
//   set name(value: string) {
//     this.validateName(value);
//     this._name = value;
//   }
//   get birthDate() {
//     return this.birthDate;
//   }
//   set birthDate(value : Date) {
//     this.validateBirthDate(value);
//     this.birthDate = value;
//   }
//   static getAge(value: Date): number {
//     const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
//     const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos
//     return Math.floor(diff / yearMs);
//   }
//   private validateName(value: string): void {
//     if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
//   }
//   private validateBirthDate(value: Date): void {
//     if (value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
//     if (Person.getAge(value) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
//   }
// }
// ./Person.ts
class Person {
    constructor(_name, _birthDate) {
        this._name = _name;
        this._birthDate = _birthDate;
        this.name = _name;
        this.birthDate = _birthDate;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this.validateName(value);
        this._name = value;
    }
    get birthDate() {
        return this._birthDate;
    }
    set birthDate(value) {
        this.validateBirthDate(value);
        this._birthDate = value;
    }
    static getAge(value) {
        const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos entre a data atual e a data passada por parâmetro
        const yearMs = 31536000000; // 1 ano = 31536000000 milissegundos
        return Math.floor(diff / yearMs);
    }
    validateName(value) {
        if (value.length < 3)
            throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    validateBirthDate(value) {
        if (value.getTime() > new Date().getTime())
            throw new Error('A data de nascimento não pode ser uma data no futuro.');
        if (Person.getAge(value) > 120)
            throw new Error('A pessoa deve ter no máximo 120 anos.');
    }
}
exports.default = Person;
