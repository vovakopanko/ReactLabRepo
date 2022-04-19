import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Actions = {
  email: string;
  userName: string;
  profileDescription: string;
  address: string;
  phoneNumber: string;
};

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
    updateInfoUser: (state, actions: PayloadAction<Actions>) => {
      state.email = actions.payload.email;
      state.userName = actions.payload.userName;
      state.description = actions.payload.profileDescription;
      state.address = actions.payload.address;
      state.phoneNumber = actions.payload.phoneNumber;
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
  updateInfoUser,
} = actions;

export default reducer;
