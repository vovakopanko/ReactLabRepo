import { AppStateType } from "../../reduxStore";

export const selectorEmailUser = (state: AppStateType) => {
  return state.authReducer.email;
};

export const selectorIsAuthUser = (state: AppStateType) => {
  return state.authReducer.isAuth;
};
