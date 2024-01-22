/**
 * Given 'WISHES' array, define function 'calculateTotalCost' to return how much it would cost to just buy everything at once.
 *
 * Expected: 227005
 */

const WISHES = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

export const calculateTotalCost = function (wishlist) {
  const totalCost = wishlist.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return totalCost;
};
