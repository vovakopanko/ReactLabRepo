import { AppStateType } from "../../reduxStore";

export const selectorEmailUser = (state: AppStateType) => {
  return state.authReducer.email;
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

export const selectorGetUserName = (state: AppStateType) => {
  return state.authReducer.userName;
};
