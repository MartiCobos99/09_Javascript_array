import filterLongWords from "./filterLongWords.js";

describe("Given filterLongWords", () => {
  test("when an array of strings is given as an argument, then the expected array should be returned", () => {
    const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
    const BEATLES = ["John", "George", "Paul", "Ringo"];

    const expectedLanguagesResult = ["JavaScript", "TypeScript"];
    const expectedBeatlesResult = ["George", "Ringo"];

    const longLanguages = filterLongWords(LANGUAGES);
    const longBeatles = filterLongWords(BEATLES);

    expect(longLanguages).toBeDefined();
    expect(longLanguages.length).toEqual(expectedLanguagesResult.length);
    expect(longLanguages).toEqual(expectedLanguagesResult);

    expect(longBeatles).toBeDefined();
    expect(longBeatles.length).toEqual(expectedBeatlesResult.length);
    expect(longBeatles).toEqual(expectedBeatlesResult);
  });
});
