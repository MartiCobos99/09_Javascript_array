import { capitalizeNames } from "./capitalizeNames.js";

describe("Given capitalizeNames", () => {
  test("When capitalizing MATES array, then the result should have capitalized names", () => {
    const mates = ["john", "JACOB", "jinGleHeimer", "schmidt"];
    const expectedResult = ["John", "Jacob", "Jingleheimer", "Schmidt"];

    const matesCapitalized = capitalizeNames(mates);

    expect(matesCapitalized).toBeDefined();
    expect(matesCapitalized.length).toEqual(4);
    expect(matesCapitalized).toEqual(expectedResult);
  });
});
