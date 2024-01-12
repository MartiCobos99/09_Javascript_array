const capitalizeMates = require("./capitalizeMates");

test("capitalizeMates should capitalize names in the MATES array", () => {
  const result = capitalizeMates(["john", "JACOB", "jinGleHeimer", "schmidt"]);
  expect(result).toEqual(["John", "Jacob", "Jingleheimer", "Schmidt"]);
});
