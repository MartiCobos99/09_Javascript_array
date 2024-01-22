import calculateSumFromInitialValue from "./calculateSumFromInitialValue.js";

describe("Given calculateSumFromInitialValue", () => {
  test("when an initial value is provided, then the expected sum value should be returned", () => {
    const NUMBERS = [1, 2, 3, 4, 5];

    const initialValueZero = 0;
    const expectedSumZero = 15;

    const sumResultZero = calculateSumFromInitialValue(initialValueZero);

    expect(sumResultZero).toBeDefined();
    expect(sumResultZero).toEqual(expectedSumZero);

    const initialValueTen = 10;
    const expectedSumTen = 25;

    const sumResultTen = calculateSumFromInitialValue(initialValueTen);

    expect(sumResultTen).toBeDefined();
    expect(sumResultTen).toEqual(expectedSumTen);
  });
});
