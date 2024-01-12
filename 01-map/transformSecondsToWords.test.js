const transformSecondsToWords = require("./transformSecondsToWords");

test("transformSecondsToWords converts numbers to strings", () => {
  const result = transformSecondsToWords([2, 5, 100]);
  expect(result).toEqual(["2", "5", "100"]);
});
