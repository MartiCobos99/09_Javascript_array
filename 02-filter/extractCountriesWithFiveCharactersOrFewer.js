import { filterMembersByMembership } from "./filterMembersByMembership";

describe("Given filterMembersByMembership", () => {
  test("When CUSTOMERS array is provided as an argument, then the expected array should be returned.", () => {
    const CUSTOMERS = [
      {
        name: "Foo",
        member: true,
      },
      {
        name: "Bar",
        member: false,
      },
      {
        name: "Fizz",
        member: true,
      },
      {
        name: "Buzz",
        member: false,
      },
      {
        name: "FizzBuzz",
        member: true,
      },
    ];

    const expectedResult = [
      { name: "Foo", member: true },
      { name: "Fizz", member: true },
      { name: "FizzBuzz", member: true },
    ];

    const clubMembers = filterMembersByMembership(CUSTOMERS);

    expect(clubMembers).toBeDefined();
    expect(clubMembers).toEqual(expectedResult);
  });
});
