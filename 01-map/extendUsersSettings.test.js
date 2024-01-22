import { extendUsersSettings } from "./extendUsersSettings.js";

describe("Given extendUsersSettings extends user properties", () => {
  test("When extending user settings, then the result should match the expected user settings", () => {
    const expected = [
      {
        email: "lindsay.ferguson@reqres.in",
        firstName: "Lindsay",
        lastName: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
        id: 0,
        isEnabled: true,
      },
      {
        email: "michael.lawson@reqres.in",
        firstName: "Michael",
        lastName: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
        id: 1,
        isEnabled: true,
      },
      {
        email: "tobias.funke@reqres.in",
        firstName: "Tobias",
        lastName: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
        id: 2,
        isEnabled: true,
      },
    ];

    const resultUsers = extendUsersSettings();

    expect(resultUsers).toBeDefined();
    expect(resultUsers).toEqual(expected);
  });
});
