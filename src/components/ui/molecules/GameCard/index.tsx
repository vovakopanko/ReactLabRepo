import { CardItem, imagesPlatforms } from "./type";
import {
  AgeRestrictions,
  CardBackBlock,
  CardBlock,
  GameDescription,
  Image,
  ImagePlatform,
  ImagePlatformContainer,
  PriceBlock,
  Span,
  StarContainer,
  StarImage,
} from "./style";
import image from "./../../../../assets/svgIcon/star.svg";
import Button from "../../atoms/Button";

const GamePlatform = ({ src, alt }: { src: string; alt: string }) => {
  return <ImagePlatform src={src} alt={alt} />;
};

const GameCard = ({
  imagePlatforms,
  url,
  alt,
  title,
  price,
  amountStars,
  description,
  age,
}: CardItem) => {
  const starsCount = new Array(amountStars).fill("star");

  return (
    <>
      <CardBlock>
        <ImagePlatformContainer>
          {imagePlatforms.map((platform: imagesPlatforms, index: number) => (
            <GamePlatform key={index} {...platform} />
          ))}
        </ImagePlatformContainer>
        <Image src={url} alt={alt} />
        <PriceBlock>
          <Span>{title}</Span>
          <Span>{price}$</Span>
        </PriceBlock>
        <StarContainer>
          {starsCount.map((_, index) => {
            return <StarImage src={image} key={index} />;
          })}
        </StarContainer>
      </CardBlock>
      <CardBackBlock>
        <GameDescription>{description}</GameDescription>
        <AgeRestrictions>{age}+</AgeRestrictions>
        <Button title={"Add to cart"} width={"40%"} type="secondary" />
      </CardBackBlock>
    </>
  );
};

export default GameCard;
