import { images } from "@/constants/image";
import {
  BlockItem,
  CategoryContainer,
  GameLogo,
  GameImage,
  Subtitle,
} from "./style";
import { TCategory } from "./types";

const categories: TCategory[] = [
  { id: 0, alt: "windows", title: "PC", image: images.WINDOWS },
  { id: 1, alt: "playstation", title: "Playstation 5", image: images.PS },
  { id: 2, alt: "xbox", title: "Xbox One", image: images.XBOX_LOGO },
];

const Category = ({ alt, title, image }: TCategory) => {
  return (
    <CategoryContainer>
      <GameLogo>
        <GameImage src={image} alt={alt} />
      </GameLogo>
      <Subtitle>{title}</Subtitle>
    </CategoryContainer>
  );
};

const CategoryList = () => {
  return (
    <BlockItem>
      {categories.map(({ alt, title, image, id }: TCategory) => (
        <Category key={id} alt={alt} title={title} image={image} />
      ))}
    </BlockItem>
  );
};

export default CategoryList;
