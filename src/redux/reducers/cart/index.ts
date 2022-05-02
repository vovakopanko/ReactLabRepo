import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type imagesPlatforms = { id: number; src: string; alt: string };

type cartList = {
  name: string;
  platforms: imagesPlatforms[];
  orderDate: string;
  amount: number;
  prise: number;
  checked: boolean;
};

type TState = {
  cartList: cartList[];
};

type Amount = {
  name: string;
  amount: number;
};

type CheckBox = {
  name: string;
  checked: boolean;
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
      return { ...state, cartList: actions.payload };
    },
    updateAmountCard: (state, actions: PayloadAction<Amount>) => {
      const index = state.cartList
        .map((el) => el.name)
        .indexOf(actions.payload.name);

      state.cartList[index].amount = Number(actions.payload.amount);
    },
    updateCheckBoxGame: (state, actions: PayloadAction<CheckBox>) => {
      const index = state.cartList
        .map((el) => el.name)
        .indexOf(actions.payload.name);
      state.cartList[index].checked = actions.payload.checked;
    },
  },
});

const { actions, reducer } = cartSlice;

export const {
  setCartList,
  clearCartList,
  updateAmountCard,
  updateCheckBoxGame,
  removeCurrentGames,
} = actions;

export default reducer;
