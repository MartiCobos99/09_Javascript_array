/**

Define the function 'filterLongWords' that takes an array of strings and returns a new array containing only the strings with a length equal to or greater than 5.
Use a for loop for the iteration.
Expected LANGUAGES: ['JavaScript', 'TypeScript']
Expected BEATLES: ["George", "Ringo"];
*/
const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];

export const filterLongWords = function (inputWords) {
  const resultWords = [];

  const totalWords = inputWords.length;

  for (let i = 0; i < totalWords; i++) {
    if (inputWords[i].length >= 5) {
      const currentWord = inputWords[i];
      resultWords.push(currentWord);
    }
  }

  return resultWords;
};
