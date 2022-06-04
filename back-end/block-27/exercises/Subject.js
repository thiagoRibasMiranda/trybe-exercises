"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subject {
    constructor(_name) {
        this._name = _name;
        this.name = this._name;
    }
    get name() {
        return this._name;
    }
    set name(v) {
        if (v.length < 3) {
            throw new Error('O nome tem que possuir no mínimo 3 caracteres');
        }
        this._name = v;
    }
}
exports.default = Subject;
