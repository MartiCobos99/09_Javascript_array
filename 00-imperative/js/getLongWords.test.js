import { getLongWords } from "./getLongWords";

describe("Given getLongWords", () => {
  test("When LANGUAGES array is provided Then expected array should be returned", () => {
    //arrange
    const words = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
    const EXPECTED_RESULT = ["JavaScript", "TypeScript"];

    //act
    const longLanguages = getLongWords(words);

    //assert
    expect(longLanguages).toBeDefined();
    expect(longLanguages).toEqual(EXPECTED_RESULT);
  });

  test("When BEATLES array is provided Then expected array should be returned", () => {
    //arrange
    const EXPECTED_RESULT = ["George", "Ringo"];
    const words = ["John", "George", "Paul", "Ringo"];
    //act
    const longBeatles = getLongWords(words);

    //assert
    expect(longBeatles).toBeDefined();
    expect(longBeatles).toEqual(EXPECTED_RESULT);
  });
});
