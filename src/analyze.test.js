const analyze = require('./analyze');

test('return average, min, max, and length of an array', () => {
  const obj = {
    average: 4,
    min: 1,
    max: 8,
    length: 6
  };
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual(obj);
});

test('returns object of empty array', () => {
  const obj = {
    average: NaN,
    min: Infinity,
    max: -Infinity,
    length: 0
  };
  expect(analyze([])).toEqual(obj);
});
