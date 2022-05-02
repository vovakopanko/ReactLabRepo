export type CardItem = {
  title: string;
  prise: number;
  url: string;
  alt: string;
  amountStars: number;
  description: string;
  age: number;
  imagePlatforms: imagesPlatforms[];
};

export type GameInfo = {
  name: string;
  platforms: imagesPlatforms[];
  orderDate: string;
  amount: number;
  prise: number;
  checked: boolean;
};

export type imagesPlatforms = { id: number; src: string; alt: string };
