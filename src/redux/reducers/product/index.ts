import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TState = {
  genres: string;
  age: number;
  criteria: string;
  type: string;
};

const initialState: TState = {
  genres: "",
  age: 0,
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
    setAgeFilter: (state, actions: PayloadAction<number>) => {
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
