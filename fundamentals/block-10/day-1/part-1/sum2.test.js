const sum2 = require('./sum2');

describe('sum2', () =>{
  it('4 plus 5 equals 9', () => {
    expect(sum2(4, 5)).toBe(9);
  });
  test('0 plus 0 equals 0', () => {
    expect(sum2(0, 0)).toBe(0);
  });
  test('throw an error when a string is passed', () => {
    expect(() => {
      sum2(4, '5');
    }).toThrow();
  });
  test('error message is "parameters must be numbers"', () => {
    expect(() => {
      sum2(4, '5');
    }).toThrow(/parameters must be numbers/);
  });
});