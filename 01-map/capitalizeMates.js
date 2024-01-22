/**
 * Define the function 'capitalizeNames' that takes an array of strings and returns a new array with capitalized names.
 *
 * Expected: ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */

const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];

export const capitalizeNames = (names) => {
  const capitalizedNames = names.map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  });
  return capitalizedNames;
};
