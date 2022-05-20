type imagesPlatforms = { id: number; src: string; alt: string };

type cartList = {
  name: string;
  platforms: imagesPlatforms[];
  orderDate: string;
  amount: number;
  price: number;
  checked: boolean;
};

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
