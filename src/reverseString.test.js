const reverseString = require('./reverseString');

test('reverses any string', () => {
  expect(reverseString('cat')).toMatch('tac');
});

test('reverses any sentence', () => {
  expect(reverseString('this is a sentence')).toMatch('ecnetnes a si siht');
});
