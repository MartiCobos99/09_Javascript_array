/**
 * Given 'VOTERS' array, define function 'countTotalVoters' to return a count of how many people voted.
 *
 * Expected: 7
 */

const VOTERS = [
  { name: "Jeff", age: 30, voted: true },
  { name: "Becky", age: 43, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Jake", age: 32, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Bob", age: 30, voted: true },
  { name: "Sam", age: 20, voted: false },
  { name: "Kate", age: 25, voted: false },
  { name: "Zack", age: 19, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Ed", age: 55, voted: true },
];

const countTotalVoters = function (voters) {
  const totalVoters = voters.reduce((count, voter) => {
    return count + Number(voter.voted);
  }, 0);

  return totalVoters;
};

export default countTotalVoters;
