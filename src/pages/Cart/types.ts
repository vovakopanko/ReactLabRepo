type imagesPlatforms = { id: number; src: string; alt: string };

export type cartList = {
  name: string;
  platforms: imagesPlatforms[];
  orderDate: string;
  amount: number;
  price: number;
  checked: boolean;
};

export type GameInfo = {
  name: string;
  platforms: imagesPlatforms[];
  orderDate: string;
  amount: number;
  price: number;
  checked: boolean;
};
