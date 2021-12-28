import { images } from "@/constants/image";
import { FC } from "react";
import Category from "../../molecules/Category";
import { BlockItem } from "./style";
import { TCategory } from "./types";

const categories: TCategory[] = [
  { id: 0, alt: "windows", title: "PC", image: images.WINDOWS },
  { id: 1, alt: "playstation", title: "Playstation 5", image: images.PS },
  { id: 2, alt: "xbox", title: "Xbox One", image: images.XBOX_LOGO },
];

const CategoryList: FC = () => {
  return (
    <BlockItem>
      {categories.map(({ alt, title, image, id }: TCategory) => (
        <Category key={id} alt={alt} title={title} image={image} />
      ))}
    </BlockItem>
  );
};

export default CategoryList;
