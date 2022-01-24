import { useEffect, useState } from "react";
import { FC } from "react";
import Category from "../Category";
import { BlockItem } from "./style";
import { TCategory } from "./types";
import { categoryAPI } from "@/api/CategoryAPI";

const CategoryList: FC = () => {
  const [categories, setCategories] = useState<TCategory[]>([]);

  useEffect(() => {
    const query = async () => {
      const data = await categoryAPI.getCategoryURL();
      setCategories(data);
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
