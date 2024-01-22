/**
 * Given 'WORDS' array, define function 'filterLongWords' to return an array only with strings with length equal to or greater than 5.
 * Use a for() loop for the instruction.
 *
 * Expected LANGUAGES: ['JavaScript', 'TypeScript']
 * Expected BEATLES: ["George", "Ringo"];
 */

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];

export const filterLongWords = function (words) {
  const longWords = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      longWords.push(words[i]);
    }
  }

  return longWords;
};
