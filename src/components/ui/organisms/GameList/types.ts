export type TCardItem = {
  title: string;
  prise: number;
  url: string;
  alt: string;
  amountStars: number;
  description: string;
  age: number;
  imagePlatforms: imagesPlatforms[];
  genres: string;
};

export type TGameCard = {
  _id: number;
  title: string;
  prise: number;
  url: string;
  alt: string;
  amountStars: number;
  age: number;
  description: string;
  imagePlatforms: imagesPlatforms[];
  genres: string;
};

export enum amountFavoriteGame {
  STANDARTSHEME = 3,
}

export type imagesPlatforms = { id: number; src: string; alt: string };
