import { cartList } from "./types";

export const totalAmount = (selectedGames: cartList[]) => {
  return Number(
    selectedGames
      .reduce((prev, cardItem) => {
        if (cardItem.checked) {
          return prev + cardItem.price * cardItem.amount;
        }
        return prev;
      }, 0)
      .toFixed(2)
  );
};
