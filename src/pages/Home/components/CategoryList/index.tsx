import { useEffect, useState } from "react";
import { FC } from "react";
import Category from "../Category";
import { BlockItem } from "./style";
import { TCategory } from "./types";

const CategoryList: FC = () => {
  const [categories, setCategories] = useState<TCategory[]>([]);

  useEffect(() => {
    const query = async () => {
      let uri = "http://localhost:3000/categories";
      const res = await fetch(uri);
      const posts = await res.json();
      setCategories(posts);
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
