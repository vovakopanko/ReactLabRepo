import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TState = {
  genres: string;
  age: string;
  criteria: string;
  type: string;
};

const initialState: TState = {
  genres: "",
  age: "",
  criteria: "",
  type: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setGenresFilter: (state, actions: PayloadAction<string>) => {
      state.genres = actions.payload;
    },
    setAgeFilter: (state, actions: PayloadAction<string>) => {
      state.age = actions.payload;
    },
    setCriteriaFilter: (state, actions: PayloadAction<string>) => {
      state.criteria = actions.payload;
    },
    setTypeFilter: (state, actions: PayloadAction<string>) => {
      state.type = actions.payload;
    },
  },
});

const { actions, reducer } = productSlice;

export const {
  setGenresFilter,
  setAgeFilter,
  setCriteriaFilter,
  setTypeFilter,
} = actions;

export default reducer;
