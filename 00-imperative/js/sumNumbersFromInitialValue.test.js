import { calculateSumFromInitialValue } from "./calculateSumFromInitialValue.js";

describe("Given function calculateSumFromInitialValue...", () => {
  test("When initial is 0, then expected value should be returned", () => {
    const initialNumber = 0;
    const EXPECTED_RESULT = 15;

    const result = calculateSumFromInitialValue(initialNumber);

    expect(result).toBeDefined();
    expect(result).toEqual(EXPECTED_RESULT);
  });

  test("When initial value is 10, then the sum should be 25", () => {
    const initialNumber = 10;
    const EXPECTED_RESULT = 25;

    const result = calculateSumFromInitialValue(initialNumber);

    expect(result).toBeDefined();
    expect(result).toEqual(EXPECTED_RESULT);
  });
});
