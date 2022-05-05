export type TCategory = {
  id?: number;
  alt: string;
  title: string;
  image: string;
};

export type ImagePlatforms = {
  alt: string;
  id: number;
  src: string;
};

export type CardInfo = {
  gameName: string;
  description: string;
  image: string;
  price: number;
  genres: string;
  age: number;
  imagePlatforms: ImagePlatforms[];
};
