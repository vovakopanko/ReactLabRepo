import reducer from ".";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: null })).toEqual({
    userName: "",
    email: "",
    password: "",
    description: "",
    role: "",
    address: "",
    photoUser: "",
    phoneNumber: "",
    isActivated: false,
    isAuth: false,
    openAuthWindow: false,
    openRegisterWindow: false,
    openChangePasswordWindow: false,
  });
});
