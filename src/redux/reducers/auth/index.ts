import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TState = {
  userName: string;
  email: string;
  password: string;
  isActivated: boolean;
  isAuth: boolean;
  openAuthWindow: boolean;
  openRegisterWindow: boolean;
};

const initialState: TState = {
  userName: "",
  email: "",
  password: "",
  isActivated: false,
  isAuth: false,
  openAuthWindow: false,
  openRegisterWindow: false,
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
  logOut,
} = actions;

export default reducer;
