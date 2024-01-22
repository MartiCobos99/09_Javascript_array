/**
 * Define the function 'filterEvens' to return a new array that only includes the even numbers.
 *
 * Expected: [ 2, 12, 42, 28 ]
 */

const COUNTERS = [2, 25, 43, 12, 67, 42, 28];

export const filterEvens = function (numbers) {
  const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
  });
  return evenNumbers;
};
