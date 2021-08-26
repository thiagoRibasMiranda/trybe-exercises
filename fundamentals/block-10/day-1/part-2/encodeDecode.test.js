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

  it('decode converte o número 1 na vogal "a"', () => {
    expect(decode('1')).toStrictEqual('a');
  });
  it('decode converte o número 2 na vogal "e"', () => {
    expect(decode('2')).toStrictEqual('e');
  });
  it('decode converte o número 3 na vogal "i"', () => {
    expect(decode('3')).toStrictEqual('i');
  });
  it('decode converte o número 4 na vogal "o"', () => {
    expect(decode('4')).toStrictEqual('o');
  });
  it('decode converte o número 5 na vogal "u"', () => {
    expect(decode('5')).toStrictEqual('u');
  }); 
});