import * as yup from "yup";

export type FormValue = {
  gameName: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  genres: string;
  ageUser: number;
  imagePlatforms: ImagePlatforms[];
  idCard: string;
  stars: number;
};

type ImagePlatforms = {
  alt: string;
  id: number;
  src: string;
};

export const scheme = yup.object().shape({
  gameName: yup
    .string()
    .required(`Field 'Game Name' is required `)
    .min(3, "Incorrect length Game Name, min value : 3 symbols")
    .max(24, `Incorrect length Game Name, max value : 24 symbols`),
  description: yup
    .string()
    .required(`Field 'Description' is required `)
    .min(7, "Incorrect length Description, min value : 7 symbols")
    .max(400, `Incorrect length Description, max value : 240 symbols`),
  image: yup
    .string()
    .required(`Field 'Image' is required `)
    .min(7, "Incorrect length Image, min value : 7 symbols")
    .max(360, `Incorrect length Image, max value : 360 symbols`),
  price: yup
    .number()
    .required(`Field 'Price' is required `)
    .min(0.99, "Incorrect length Price, min value : 0.99 symbols")
    .max(99.99, `Incorrect length Price, max value : 99.99 numbers`),
  genres: yup
    .string()
    .required(`Field 'Category' is required `)
    .min(5, "Incorrect length Category, min value : 5 symbols")
    .max(240, `Incorrect length Category, max value : 240 symbols`),
});
