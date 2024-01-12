/**
 * Define 'extendUsersSettings' to extend users properties
 * Add property 'id' with index value
 * Add property 'isEnabled' as true
 */

const USERS = [
  {
    email: "lindsay.ferguson@reqres.in",
    firstName: "Lindsay",
    lastName: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    email: "michael.lawson@reqres.in",
    firstName: "Michael",
    lastName: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    email: "tobias.funke@reqres.in",
    firstName: "Tobias",
    lastName: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
];

function extendUsersSettings(users) {
  return users.map((user, index) => ({
    ...user,
    id: index,
    isEnabled: true,
  }));
}

module.exports = extendUsersSettings;
