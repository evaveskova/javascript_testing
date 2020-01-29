// const calculator = require('./calculator');

test('adds 6 and 3 to equal 9', () => {
  expect(sum(6, 3)).toBe(9);
});

test('adds 34 and 50 to equal 84', () => {
  expect(sum(34, 50)).toBe(84);
});

test('subtracts 3 from 6 to equal 3', () => {
  expect(subtract(6, 3)).toBe(3);
});

test('subtracts 34 from 50 to equal 16', () => {
  expect(subtract(50, 34)).toBe(16);
});

test('multiplies 6 by 3 to equal 18', () => {
  expect(multiply(6, 3)).toBe(18);
});

test('multiplies 34 by 50 to equal 1700', () => {
  expect(multiply(34, 50)).toBe(1700);
});

test('divides 6 by 3 to equal 2', () => {
  expect(divide(6, 3)).toBe(2);
});

test('divides 100 by 25 to equal 4', () => {
  expect(divide(100, 25)).toBe(4);
});