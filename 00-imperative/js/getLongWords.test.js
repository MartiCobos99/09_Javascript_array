import { filterLongWords } from "./filterLongWords.js";

describe("Given filterLongWords", () => {
  test("When array equals to: ['Java', 'C++', 'JavaScript', 'C#', 'TypeScript'], then expected value should be returned", () => {
    const WORDS = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
    const EXPECTED_RESULT = ["JavaScript", "TypeScript"];

    const longLanguages = filterLongWords(WORDS);

    expect(longLanguages).toBeDefined();
    expect(longLanguages).toEqual(EXPECTED_RESULT);
  });

  test("When ['John', 'George', 'Paul', 'Ringo'] is provided as argument, then expected array should be returned", () => {
    const BEATLES = ["John", "George", "Paul", "Ringo"];
    const EXPECTED_RESULT = ["George", "Ringo"];

    const result = filterLongWords(BEATLES);

    expect(result).toBeDefined();
    expect(result).toEqual(EXPECTED_RESULT);
  });
});
