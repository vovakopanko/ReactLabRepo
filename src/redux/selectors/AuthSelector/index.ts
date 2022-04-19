import { AppStateType } from "../../reduxStore";

export const selectorEmailUser = (state: AppStateType) => {
  return state.authReducer.email;
};

export const selectorPasswordUser = (state: AppStateType) => {
  return state.authReducer.password;
};

export const selectorUpdateUserInfo = (state: AppStateType) => {
  return state.authReducer;
};

export const selectorIsAuthUser = (state: AppStateType) => {
  return state.authReducer.isAuth;
};

export const selectorStatusWindowAuth = (state: AppStateType) => {
  return state.authReducer.openAuthWindow;
};

export const selectorStatusWindowRegistration = (state: AppStateType) => {
  return state.authReducer.openRegisterWindow;
};

export const selectorStatusWindowChangePassword = (state: AppStateType) => {
  return state.profileReducer.openChangePasswordWindow;
};

export const selectorUserName = (state: AppStateType) => {
  return state.authReducer.userName;
};
