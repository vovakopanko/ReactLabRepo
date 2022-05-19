import reducer, { onStatusPasswordChange } from ".";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: null })).toEqual({
    isChangePassword: false,
  });
});

test("should show modal window for change password current user", () => {
  const prevState = {
    isChangePassword: false,
  };

  expect(reducer(prevState, onStatusPasswordChange(true))).toEqual({
    isChangePassword: true,
  });
});

test("should hide modal window for change password current user", () => {
  const prevState = {
    isChangePassword: true,
  };

  expect(reducer(prevState, onStatusPasswordChange(false))).toEqual({
    isChangePassword: false,
  });
});
