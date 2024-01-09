/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater than 5
 * use for() instruction
 *
 * expected LANGUAGES: ['JavaScript', 'TypeScript']
 * expected BEATLES: ["George", "Ringo"];
 */

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];

export const getLongWords = function (words) {
  const longWords = [];
  const collectionLength = words.length;

  for (let index = 0; index < collectionLength; index++) {
    const word = words[index];
    if (word.length >= 5) {
      longWords.push(word);
    }
  }

  return longWords;
};
