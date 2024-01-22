import { filterEvens } from "./filterEvens.js";

describe("Given filterEvens", () => {
  test("When COUNTERS array is provided as an argument, then the expected array should be returned.", () => {
    const COUNTERS = [2, 25, 43, 12, 67, 42, 28];
    const expectedResult = [2, 12, 42, 28];

    const evenNumbers = filterEvens(COUNTERS);

    expect(evenNumbers).toBeDefined();
    expect(evenNumbers).toEqual(expectedResult);
  });
});
