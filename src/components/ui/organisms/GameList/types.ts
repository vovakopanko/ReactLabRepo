export type TCardItem = {
  title: string;
  price: number;
  url: string;
  alt: string;
  amountStars: number;
  description: string;
  age: number;
  imagePlatforms: imagesPlatforms[];
  genres: string;
};

export type TGameCard = { _id: string } & TCardItem;

export enum amountFavoriteGame {
  STANDARTSHEME = 3,
}

export type imagesPlatforms = { id: number; src: string; alt: string };
