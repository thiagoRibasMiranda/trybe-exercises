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

  it('encode converte apenas a vogal "a" no número 1', () => {
    expect(encode('ana')).toStrictEqual('1n1');
  });
  it('encode converte apenas a vogal "e" no número 2', () => {
    expect(encode('ele')).toStrictEqual('2l2');
  });
  it('encode converte apenas a vogal "i" no número 3', () => {
    expect(encode('xixi')).toStrictEqual('x3x3');
  });
  it('encode converte apenas a vogal "o" no número 4', () => {
    expect(encode('ovo')).toStrictEqual('4v4');
  });
  it('encode converte apenas a vogal "u" no número 5', () => {
    expect(encode('nu')).toStrictEqual('n5');
  });

  it('decode converte apenas o número 1 na vogal "a"', () => {
    expect(decode('1n1')).toStrictEqual('ana');
  });
  it('decode converte apenas o número 2 na vogal "e"', () => {
    expect(decode('2l2')).toStrictEqual('ele');
  });
  it('decode converte apenas o número 3 na vogal "i"', () => {
    expect(decode('x3x3')).toStrictEqual('xixi');
  });
  it('decode converte apenas o número 4 na vogal "o"', () => {
    expect(decode('4v4')).toStrictEqual('ovo');
  });
  it('decode converte apenas o número 5 na vogal "u"', () => {
    expect(decode('n5')).toStrictEqual('nu');
  }); 
});