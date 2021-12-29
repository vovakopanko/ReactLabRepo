export type TCardItem = {
  title: string;
  prise: string;
  url: string;
  alt: string;
  amountStars: number;
  description: string;
  age: string;
  imagePlatforms: imagesPlatforms[];
};

export type TGameCard = {
  id: number;
  title: string;
  prise: string;
  url: string;
  alt: string;
  amountStars: number;
  age: string;
  description: string;
  imagePlatforms: imagesPlatforms[];
};

export type imagesPlatforms = { id: number; src: string; alt: string };
