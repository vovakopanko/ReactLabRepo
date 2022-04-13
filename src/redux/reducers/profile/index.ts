import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TState = {
  openChangePasswordWindow: boolean;
};

const initialState: TState = {
  openChangePasswordWindow: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setStatusChangePasswordWindow: (state, actions: PayloadAction<boolean>) => {
      state.openChangePasswordWindow = actions.payload;
    },
  },
});

const { actions, reducer } = profileSlice;

export const { setStatusChangePasswordWindow } = actions;

export default reducer;
