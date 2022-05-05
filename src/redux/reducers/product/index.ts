import { imagesPlatforms } from "./../../../components/ui/organisms/GameList/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TState = {
  title: string;
  age: string;
  alt: string;
  amountStars: number;
  description: string;
  url: string;
  price: number;
  genres: string;
  imagePlatforms: imagesPlatforms[];
};

type CurrentState = {
  card: TState[];
};

const initialState: CurrentState = {
  card: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateCurrentState: (state, actions: PayloadAction<TState[]>) => {
      state.card = actions.payload;
    },
  },
});

const { actions, reducer } = productSlice;

export const { updateCurrentState } = actions;

export default reducer;
