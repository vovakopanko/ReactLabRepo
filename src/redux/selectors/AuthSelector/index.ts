import { AppStateType } from "../../reduxStore";

export const selectEmailUser = (state: AppStateType) => {
  return state.authReducer.email;
};

export const selectUserData = (state: AppStateType) => {
  return state.authReducer;
};

export const selectIsAuthUser = (state: AppStateType) => {
  return state.authReducer.isAuth;
};

export const selectorStatusWindowAuth = (state: AppStateType) => {
  return state.authReducer.openAuthWindow;
};

export const selectorStatusWindowRegistration = (state: AppStateType) => {
  return state.authReducer.openRegisterWindow;
};

export const selectIsChangePassword = (state: AppStateType) => {
  return state.profileReducer.isChangePassword;
};

export const selectorUserName = (state: AppStateType) => {
  return state.authReducer.userName;
};
