import { CardItem, imagesPlatforms } from "./type";
import {
  AgeRestrictions,
  CardBackBlock,
  CardBlock,
  GameDescription,
  Image,
  ImagePlatform,
  ImagePlatformContainer,
  PriseBlock,
  Span,
  StarContainer,
} from "./style";
import { StarTwoTone } from "@ant-design/icons";
import Button from "../../atoms/Button";

const GamePlatform = ({ src, alt }: { src: string; alt: string }) => {
  return <ImagePlatform src={src} alt={alt} />;
};

const GameCard = ({
  imagePlatforms,
  url,
  alt,
  title,
  prise,
  amountStars,
  description,
  age,
}: CardItem) => {
  const counter = [];
  for (let i = 0; i < amountStars; i++) {
    counter.push("star");
  }
  return (
    <>
      <CardBlock>
        <ImagePlatformContainer>
          {imagePlatforms.map((platform: imagesPlatforms, index: number) => (
            <GamePlatform key={index} {...platform} />
          ))}
        </ImagePlatformContainer>
        <Image src={url} alt={alt} />
        <PriseBlock>
          <Span>{title}</Span>
          <Span>{prise}</Span>
        </PriseBlock>
        <StarContainer>
          {counter.map((_, index) => {
            return <StarTwoTone key={index} twoToneColor="#ffd802" />;
          })}
        </StarContainer>
      </CardBlock>
      <CardBackBlock>
        <GameDescription>{description}</GameDescription>
        <AgeRestrictions>{age}</AgeRestrictions>
        <Button title={"Add to cart"} />
      </CardBackBlock>
    </>
  );
};

export default GameCard;
