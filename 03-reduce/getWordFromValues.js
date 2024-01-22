/**
 * Given 'VALUES' array, define function 'concatenateNumbers' to return a string of all those numbers.
 *
 * Expected: '123'
 */

const VALUES = [1, 2, 3];

const concatenateNumbers = function (values) {
  const resultString = values.reduce((string, number) => {
    return string + number.toString();
  }, "");

  return resultString;
};

export default concatenateNumbers;
