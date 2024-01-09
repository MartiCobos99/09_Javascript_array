import { feedMonkeys } from "./feedMonkeys";

describe("Given feedMonkeys", () => {
  test(
    "When 🍌ís provided as argument Then expected array should be returned",
    () => {
      //arrange
      const fruit = "🍌";
      const EXPECTED_RESULT = ["🐒 🍌", "🦍 🍌", "🦧 🍌"];

      //act
      const monkeys = feedMonkeys(fruit);

      //assert
      expect(monkeys).toBeDefined();
      expect(monkeys).toEqual(EXPECTED_RESULT);
    }
  );
});

test(
  "When 🍎 ís provided as argument Then expected array should be returned",
  () => {
    //arrange
    const fruit = "🍎";
    const EXPECTED_RESULT = ["🐒 🍎", "🦍 🍎", "🦧 🍎"];
    //act
    const monkeys = feedMonkeys(fruit);

    //assert
    expect(monkeys).toBeDefined();
    expect(monkeys).toEqual(EXPECTED_RESULT);
  }
);
