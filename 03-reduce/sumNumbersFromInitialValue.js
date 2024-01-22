/**
 * Given 'NUMBERS' array, define function 'calculateSumFromInitialValue' to return its sum value depending on the initial value.
 * Use a for() loop for the instruction.
 *
 * Expected with initial as 0: 15
 * Expected with initial as 10: 25
 */

const NUMBERS = [1, 2, 3, 4, 5];

const calculateSumFromInitialValue = function (initialValue) {
  let result = initialValue;

  for (let i = 0; i < NUMBERS.length; i++) {
    result += NUMBERS[i];
  }

  return result;
};

export default calculateSumFromInitialValue;
