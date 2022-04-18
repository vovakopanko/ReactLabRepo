import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TState = {
  userName: string;
  email: string;
  password: string;
  description: string;
  address: string;
  photoUser: string;
  phoneNumber: string;
  isActivated: boolean;
  isAuth: boolean;
  openAuthWindow: boolean;
  openRegisterWindow: boolean;
  openChangePasswordWindow: boolean;
};

const initialState: TState = {
  userName: "",
  email: "",
  password: "",
  description: "",
  address: "",
  photoUser: "",
  phoneNumber: "",
  isActivated: false,
  isAuth: false,
  openAuthWindow: false,
  openRegisterWindow: false,
  openChangePasswordWindow: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthCurrentUser: (state, actions: PayloadAction<boolean>) => {
      state.isAuth = actions.payload;
    },
    setStatusAuthWindow: (state, actions: PayloadAction<boolean>) => {
      state.openAuthWindow = actions.payload;
    },
    setStatusRegistrationWindow: (state, actions: PayloadAction<boolean>) => {
      state.openRegisterWindow = actions.payload;
    },
    updateUserName: (state, actions: PayloadAction<string>) => {
      state.userName = actions.payload;
    },
    updateEmailUser: (state, actions: PayloadAction<string>) => {
      state.email = actions.payload;
    },
    updateDescription: (state, actions: PayloadAction<string>) => {
      state.description = actions.payload;
    },
    updateAddress: (state, actions: PayloadAction<string>) => {
      state.address = actions.payload;
    },
    updatePhone: (state, actions: PayloadAction<string>) => {
      state.phoneNumber = actions.payload;
    },
    updatePhotoUser: (state, actions: PayloadAction<string>) => {
      state.photoUser = actions.payload;
    },
    logOut: (state, actions: PayloadAction<boolean>) => {
      state.isAuth = actions.payload;
    },
  },
});

const { actions, reducer } = authSlice;

export const {
  setAuthCurrentUser,
  setStatusAuthWindow,
  setStatusRegistrationWindow,
  updateUserName,
  updateEmailUser,
  updateDescription,
  updateAddress,
  updatePhone,
  updatePhotoUser,
  logOut,
} = actions;

export default reducer;
