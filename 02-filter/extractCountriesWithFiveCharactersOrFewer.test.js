import { extractCountriesWithFiveCharactersOrFewer } from "./extractCountriesWithFiveCharactersOrFewer.js";

describe("Given extractCountriesWithFiveCharactersOrFewer", () => {
  test("When COUNTRIES is provided as an argument. Then an expected array should be returned", () => {
    const COUNTRIES = [
      "United Kingdom",
      "Italy",
      "France",
      "Portugal",
      "Greece",
    ];
    const expectedResult = ["Italy"];

    const country = extractCountriesWithFiveCharactersOrFewer(COUNTRIES);

    expect(country).toBeDefined();
    expect(country).toEqual(expectedResult);
  });
});
