import filterMembersByMembership from "./filterMembersByMembership.js";

describe("Given filterMembersByMembership", () => {
  test("should return an array with members only", () => {
    // Arrange
    const CUSTOMERS = [
      { name: "Foo", member: true },
      { name: "Bar", member: false },
      { name: "Fizz", member: true },
      { name: "Buzz", member: false },
      { name: "FizzBuzz", member: true },
    ];

    // Act
    const result = filterMembersByMembership(CUSTOMERS);

    // Assert
    expect(result).toBeDefined();
    expect(result).toHaveLength(3);
    expect(result).toEqual([
      { name: "Foo", member: true },
      { name: "Fizz", member: true },
      { name: "FizzBuzz", member: true },
    ]);
  });

  test("should return an empty array when no members are present", () => {
    // Arrange
    const CUSTOMERS = [
      { name: "Bar", member: false },
      { name: "Buzz", member: false },
    ];

    // Act
    const result = filterMembersByMembership(CUSTOMERS);

    // Assert
    expect(result).toBeDefined();
    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
  });
});
