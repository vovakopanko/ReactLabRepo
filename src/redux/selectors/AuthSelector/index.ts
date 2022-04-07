import { AppStateType } from "../../reduxStore";

export const getEmailUser = (state: AppStateType) => {
  return state.authReducer.email;
};

export const getIsAuthUser = (state: AppStateType) => {
  return state.authReducer.isAuth;
};
