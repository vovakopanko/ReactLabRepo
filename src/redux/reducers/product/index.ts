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
  isShowNotification: boolean;
  uniqueCardId: string;
};

const initialState: CurrentState = {
  card: [],
  isShowNotification: false,
  uniqueCardId: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateCurrentState: (state, actions: PayloadAction<TState[]>) => {
      state.card = actions.payload;
    },
    isShowDeleteNotification: (state, actions: PayloadAction<boolean>) => {
      state.isShowNotification = actions.payload;
    },
    setUniqueIdCurrentCard: (state, actions: PayloadAction<string>) => {
      state.uniqueCardId = actions.payload;
    },
  },
});

const { actions, reducer } = productSlice;

export const {
  updateCurrentState,
  isShowDeleteNotification,
  setUniqueIdCurrentCard,
} = actions;

export default reducer;
