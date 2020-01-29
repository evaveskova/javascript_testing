const analyze = (arr) => {
  let obj;

  if (arr === []) {
    obj = null;
  } else {
    const arrAverage = arr.reduce((a, b) => a + b, 0) / arr.length;
    const arrMin = Math.min.apply(0, arr);
    const arrMax = Math.max.apply(0, arr);
    const arrLength = arr.length;
    obj = {
      average: arrAverage,
      min: arrMin,
      max: arrMax,
      length: arrLength,
    };
  }
  return obj;
};
module.exports = analyze;
