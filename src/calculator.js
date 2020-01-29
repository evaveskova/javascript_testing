const calculator = (() => {
  const add = (num1, num2) => {
    const result = num1 + num2;
    return result;
  };
  const subtract = (num1, num2) => {
    const result = num1 - num2;
    return result;
  };
  const multiply = (num1, num2) => {
    const result = num1 * num2;
    return result;
  };
  const divide = (num1, num2) => {
    const result = num1 / num2;
    return result;
  };
  return {
    add, subtract, multiply, divide,
  };
})();
module.exports = calculator;