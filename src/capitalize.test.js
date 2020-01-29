const capitalize = require('./capitalize');

test('capitalizes any word', () => {
  expect(capitalize('cat')).toMatch('Cat');
});

test('capitalizes any sentence', () => {
  expect(capitalize('this is a sentence.')).toMatch('This is a sentence.');
});
