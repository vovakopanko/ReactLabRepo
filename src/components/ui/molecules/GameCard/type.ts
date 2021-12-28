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

export type imagesPlatforms = { src: string; alt: string };
