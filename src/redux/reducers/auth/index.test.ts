import reducer from "./index";

describe("autReducer unit test", () => {
  it("should return the initial state", () => {
    const expectedState = {
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
    };

    const result = reducer(undefined, { type: null });
    expect(result).toEqual(expectedState);
  });
});
