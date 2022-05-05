import { Roles } from "@/constants/types";
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

export const selectIsAdmin = (state: AppStateType) => {
  return state.authReducer.role === Roles.ADMIN;
};

export const selectRoleUser = (state: AppStateType) => {
  return state.authReducer.role;
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

export const selectorCartList = (state: AppStateType) => {
  return state.cartReducer.cartList;
};

export const selectCurrentCard = (state: AppStateType) => {
  return state.productReducer.card;
};

export const selectIsShowNotification = (state: AppStateType) => {
  return state.productReducer.isShowNotification;
};
