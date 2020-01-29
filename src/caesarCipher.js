const caesarCipher = (string, shifter) => {
  const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const arr = [];

  for (let i = 0; i < string.length; i += 1) {
    if (alphabetLower.includes(string[i])) {
      const position = alphabetLower.indexOf(string[i]);
      const newPosition = (position + shifter) % 26;
      arr.push(alphabetLower[newPosition]);
    } else if (alphabetUpper.includes(string[i])) {
      const position = alphabetUpper.indexOf(string[i]);
      const newPosition = (position + shifter) % 26;
      arr.push(alphabetUpper[newPosition]);
    } else {
      arr.push(string[i]);
    }
  }
  return arr.join('');
};
module.exports = caesarCipher;