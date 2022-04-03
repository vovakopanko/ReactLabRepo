import { GameLogo, GameImage, Subtitle, CategoryContainer } from "./style";
import { TCategory } from "./types";

const Category = ({ alt, title, image }: TCategory) => {
  const categoryTitle = title.replace(/\s/g, "").toLocaleLowerCase();
  return (
    <CategoryContainer to={`/category/:${categoryTitle}`}>
      <GameLogo>
        <GameImage src={image} alt={alt} />
      </GameLogo>
      <Subtitle>{title}</Subtitle>
    </CategoryContainer>
  );
};

export default Category;
