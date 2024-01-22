import concatenateNumbers from "./concatenateNumbers.js";

describe("Given concatenateNumbers", () => {
  test("when an array of numbers is given as an argument, then the expected string should be returned", () => {
    const VALUES = [1, 2, 3];
    const EXPECTED_RESULT = "123";

    const result = concatenateNumbers(VALUES);

    expect(result).toBeDefined();
    expect(result).toEqual(EXPECTED_RESULT);
  });
});
