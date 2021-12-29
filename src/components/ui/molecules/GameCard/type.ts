export type CardItem = {
  title: string;
  prise: string;
  url: string;
  alt: string;
  amountStars: number;
  description: string;
  age: string;
  imagePlatforms: imagesPlatforms[];
};

export type imagesPlatforms = { id: number; src: string; alt: string };
