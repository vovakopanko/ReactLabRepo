import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TState = {
  isChangePassword: boolean;
};

const initialState: TState = {
  isChangePassword: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    onStatusPasswordChange: (state, actions: PayloadAction<boolean>) => {
      state.isChangePassword = actions.payload;
    },
  },
});

const { actions, reducer } = profileSlice;

export const { onStatusPasswordChange } = actions;

export default reducer;
