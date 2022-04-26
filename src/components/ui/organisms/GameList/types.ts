export type TCardItem = {
  title: string;
  prise: number;
  url: string;
  alt: string;
  amountStars: number;
  description: string;
  age: string;
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
  age: string;
  description: string;
  imagePlatforms: imagesPlatforms[];
  genres: string;
};

export enum amountFavoriteGame {
  STANDARTSHEME = 3,
}

export type imagesPlatforms = { id: number; src: string; alt: string };
