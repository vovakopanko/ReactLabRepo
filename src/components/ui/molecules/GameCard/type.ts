export type CardItem = {
  title: string;
  price: number;
  url: string;
  alt: string;
  amountStars: number;
  description: string;
  age: number;
  imagePlatforms: imagesPlatforms[];
};

export type imagesPlatforms = { id: number; src: string; alt: string };
