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
    getAuthCurrentUser: (state, actions: PayloadAction<boolean>) => {
      state.isAuth = actions.payload;
    },
    getStatusAuthWindow: (state, actions: PayloadAction<boolean>) => {
      state.openAuthWindow = actions.payload;
    },
    getStatusRegistrationWindow: (state, actions: PayloadAction<boolean>) => {
      state.openRegisterWindow = actions.payload;
    },
    updateUserName: (state, actions: PayloadAction<string>) => {
      state.userName = actions.payload;
    },
  },
});

const { actions, reducer } = authSlice;

export const {
  getAuthCurrentUser,
  getStatusAuthWindow,
  getStatusRegistrationWindow,
  updateUserName,
} = actions;

export default reducer;
