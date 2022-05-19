import reducer, { onStatusPasswordChange } from ".";

describe("profileReducer unit test", () => {
  it("should return the initial state", () => {
    const expectedState = {
      isChangePassword: false,
    };

    const result = reducer(undefined, { type: null });
    expect(result).toEqual(expectedState);
  });

  it("should show modal window for change password current user", () => {
    const prevState = {
      isChangePassword: false,
    };

    const expectedState = {
      isChangePassword: true,
    };

    const result = reducer(prevState, onStatusPasswordChange(true));

    expect(result).toEqual(expectedState);
  });

  it("should hide modal window for change password current user", () => {
    const prevState = {
      isChangePassword: true,
    };

    const expectedState = {
      isChangePassword: false,
    };

    const result = reducer(prevState, onStatusPasswordChange(false));

    expect(result).toEqual(expectedState);
  });
});
