// const caesarCipher = require('./caesarCipher');

test('returns the original string when the shifter is 0', () => {
  expect(caesarCipher('microverse', 0)).toMatch('microverse');
});

test('returns the original string when the shifter is 0 and maintains case', () => {
  expect(caesarCipher('miCrovErse', 0)).toMatch('miCrovErse');
});

test('returns appropriate string when shifter is greater than 0', () => {
  expect(caesarCipher('microverse', 1)).toMatch('njdspwfstf');
});

test('returns appropriate string when shifter is greater than 0, maintaining case', () => {
  expect(caesarCipher('miCrovErse', 1)).toMatch('njDspwFstf');
});

test('wraps appropriately and returns encrypted string', () => {
  expect(caesarCipher('microverse', 25)).toMatch('lhbqnudqrd');
});

test('returns encrypted string with appropriately positioned punctuation', () => {
  expect(caesarCipher('Apple, Orange, Banana', 2)).toMatch('Crrng, Qtcpig, Dcpcpc');
});