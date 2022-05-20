import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type imagesPlatforms = { id: number; src: string; alt: string };

type cartList = {
  name: string;
  platforms: imagesPlatforms[];
  orderDate: string;
  amount: number;
  price: number;
  checked: boolean;
};

type TState = {
  cartList: cartList[];
};

type Amount = {
  name: string;
};

type CheckBox = {
  name: string;
};

const initialState: TState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartList: (state, actions: PayloadAction<cartList[]>) => {
      return { ...state, cartList: [...state.cartList, ...actions.payload] };
    },
    clearCartList: (state) => {
      state.cartList = [];
    },
    removeCurrentGames: (state, actions: PayloadAction<cartList[]>) => {
      const deselectedGames = actions.payload.filter(
        (selectedGame) => selectedGame.checked === false
      );
      return { ...state, cartList: deselectedGames };
    },
    decreaseAmount: (state, actions: PayloadAction<Amount>) => {
      const index = state.cartList.findIndex(
        (el) => el.name === actions.payload.name
      );

      state.cartList[index].amount = state.cartList[index].amount - 1;
    },
    increaseAmount: (state, actions: PayloadAction<Amount>) => {
      const index = state.cartList.findIndex(
        (el) => el.name === actions.payload.name
      );

      state.cartList[index].amount = state.cartList[index].amount + 1;
    },
    toggleChecked: (state, actions: PayloadAction<CheckBox>) => {
      const index = state.cartList.findIndex(
        (el) => el.name === actions.payload.name
      );
      state.cartList[index].checked = !state.cartList[index].checked;
    },
  },
});

const { actions, reducer } = cartSlice;

export const {
  setCartList,
  clearCartList,
  increaseAmount,
  decreaseAmount,
  toggleChecked,
  removeCurrentGames,
} = actions;

export default reducer;
