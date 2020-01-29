// const reverseString = require('./reverseString');

test('reverses any string', () => {
  expect(capitalize('cat')).toMatch('tac');
});

test('reverses any sentence', () => {
  expect(capitalize('this is a sentence')).toMatch('ecnetnes a si siht');
});
