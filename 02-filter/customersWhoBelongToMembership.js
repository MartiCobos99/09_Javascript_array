/**
 * Define the function 'filterMembersByMembership' to return a new array that filters out customers who do not belong to the club.
 *
 * Expected: [{ name: 'Foo', member: true }, { name: 'Fizz', member: true }, { name: 'FizzBuzz', member: true }]
 */

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

const filterMembersByMembership = (customers) => {
  const clubMembers = customers.filter((customer) => {
    return customer.member === true;
  });

  return clubMembers;
};

export default filterMembersByMembership;
