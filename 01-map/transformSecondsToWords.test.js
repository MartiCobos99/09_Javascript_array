import extractVipsNames from "./extractVipsNames.js";

test("When extracting VIP names from VIPS array, then the result should match the expected names array", () => {
  const result = extractVipsNames([
    {
      name: "Foo",
      age: 80,
    },
    {
      name: "Bar",
      age: 2,
    },
    {
      name: "Fizz",
      age: 5,
    },
    {
      name: "Buzz",
      age: 16,
    },
    {
      name: "FizzBuzz",
      age: 100,
    },
  ]);

  expect(result).toEqual(["Foo", "Bar", "Fizz", "Buzz", "FizzBuzz"]);
});
