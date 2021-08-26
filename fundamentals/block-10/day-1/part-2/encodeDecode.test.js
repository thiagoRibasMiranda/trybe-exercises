const {encode, decode} = require('./encodeDecode.js');

describe('Testa as funções encode e decode', () => {
  it('encode é uma função', () => {
    expect(typeof encode).toStrictEqual('function');
  });
  it('decode é uma função', () => {
    expect(typeof decode).toStrictEqual('function');
  });
  it('encode converte a vogal "a" no número 1', () => {
    expect(encode('a')).toStrictEqual('1');
  });
  it('encode converte a vogal "e" no número 2', () => {
    expect(encode('e')).toStrictEqual('2');
  });
  it('encode converte a vogal "i" no número 3', () => {
    expect(encode('i')).toStrictEqual('3');
  });
  it('encode converte a vogal "o" no número 4', () => {
    expect(encode('o')).toStrictEqual('4');
  });
  it('encode converte a vogal "u" no número 5', () => {
    expect(encode('u')).toStrictEqual('5');
  });

});