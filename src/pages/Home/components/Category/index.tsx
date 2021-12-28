import { CategoryContainer, GameLogo, GameImage, Subtitle } from "./style";
import { TCategory } from "./types";

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

export default Category;
