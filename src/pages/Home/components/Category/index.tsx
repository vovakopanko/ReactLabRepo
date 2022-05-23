import { GameLogo, GameImage, Subtitle, CategoryContainer } from "./styles";
import { TCategory } from "./types";

const Category = ({ alt, title, image }: TCategory) => {
  const productTitle = title.replace(/\s/g, "").toLocaleLowerCase();
  return (
    <CategoryContainer to={`product/${productTitle}`}>
      <GameLogo>
        <GameImage src={image} alt={alt} />
      </GameLogo>
      <Subtitle>{title}</Subtitle>
    </CategoryContainer>
  );
};

export default Category;
