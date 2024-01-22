import { createLocalesSettings } from "./createLocalesSettings.js";

describe("Given createLocalesSettings", () => {
  test("When LOCALES array is provided as an argument, the expected object should be returned", () => {
    const LOCALES = ["EN", "GR", "FR", "IT", "PT"];
    const expectedResult = {
      EN: { id: 0, enabled: true },
      GR: { id: 1, enabled: false },
      FR: { id: 2, enabled: false },
      IT: { id: 3, enabled: false },
      PT: { id: 4, enabled: false },
    };

    const localesSettings = createLocalesSettings(LOCALES);

    expect(localesSettings).toBeDefined();
    expect(localesSettings).toEqual(expectedResult);
  });
});
