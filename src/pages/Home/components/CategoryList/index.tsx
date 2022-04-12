import { useEffect, useState } from "react";
import { FC } from "react";
import Category from "../Category";
import { BlockItem } from "./style";
import { TCategory } from "./types";
import { contentAPI } from "@/api/ContentAPI";

const CategoryList: FC = () => {
  const [categories, setCategories] = useState<TCategory[]>([]);

  useEffect(() => {
    const query = async () => {
      const data = await contentAPI.getCategories();
      if (data) {
        setCategories(data);
      }
    };
    query();
  }, []);

  return (
    <BlockItem>
      {categories.map(({ alt, title, image, id }: TCategory) => (
        <Category key={id} alt={alt} title={title} image={image} />
      ))}
    </BlockItem>
  );
};

export default CategoryList;
