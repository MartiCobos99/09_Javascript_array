import { sumNumbersFromInitialValue } from "./sumNumbersFromInitialValue";

describe("Given sumNumbersFromInitialValue", () => {
  test("When initial is 0 Then expected sum should be returned", () => {
    //arrange
    const initial = 0;
    const EXPECTED_RESULT = 15;

    //act
    const result = sumNumbersFromInitialValue(initial);

    //assert
    expect(result).toBeDefined();
    expect(result).toEqual(EXPECTED_RESULT);
  });

  test("When initial is 10 Then expected sum should be returned", () => {
    //arrange
    const initial = 10;
    const EXPECTED_RESULT = 25;

    //act
    const result = sumNumbersFromInitialValue(initial);

    //assert
    expect(result).toBeDefined();
    expect(result).toEqual(EXPECTED_RESULT);
  });
});
