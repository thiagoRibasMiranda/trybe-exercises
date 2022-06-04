export default class Subject {
  constructor(private _name: string) {
    this.name = this._name;
  }

  public get name() : string {
    return this._name
  }
  

  public set name(v : string) {
    if (v.length < 3) {
      throw new Error('O nome tem que possuir no mínimo 3 caracteres');
    }
    this._name = v;
  }
  
}