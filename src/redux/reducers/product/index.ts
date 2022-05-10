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
  nameSelectedCard: string;
};

const initialState: CurrentState = {
  card: [],
  isShowNotification: false,
  uniqueCardId: "",
  nameSelectedCard: "",
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
    setSelectedNameCard: (state, actions: PayloadAction<string>) => {
      state.nameSelectedCard = actions.payload;
    },
  },
});

const { actions, reducer } = productSlice;

export const {
  updateCurrentState,
  isShowDeleteNotification,
  setUniqueIdCurrentCard,
  setSelectedNameCard,
} = actions;

export default reducer;
