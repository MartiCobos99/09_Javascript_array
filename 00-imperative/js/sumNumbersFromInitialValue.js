/**
 * Given 'NUMBERS' array, define function 'sumNumbersFromInitialValue' to return its sum value depending on initial value.
 * use for() instruction
 *
 * expected with initial as 0: 15
 * expected with initial as 10: 25
 */

const numbers = [1, 2, 3, 4, 5];

export const sumNumbersFromInitialValue = (initialNumber) => {
  const numbersLength = numbers.length;

  let sum = initialNumber;

  for (let index = 0; index < numbersLength; index++) {
    sum += numbers[index];
  }

  return sum;
};
