const {encode, decode} = require('./encodeDecode.js');

describe('Testa as funções encode e decode', () => {
  it('encode é uma função', () => {
    expect(typeof encode).toStrictEqual('function');
  });
  it('decode é uma função', () => {
    expect(typeof decode).toStrictEqual('function');
  });
});