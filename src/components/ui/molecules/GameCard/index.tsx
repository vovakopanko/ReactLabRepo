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

const GamePlatform = ({ src, alt }: { src: string; alt: string }) => (
  <ImagePlatform src={src} alt={alt} />
);

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
  return (
    <>
      <CardBlock>
        <ImagePlatformContainer>
          {imagePlatforms.map((platform: imagesPlatforms) => (
            <GamePlatform key={platform.id} {...platform} />
          ))}
        </ImagePlatformContainer>
        <Image src={url} alt={alt} />
        <PriseBlock>
          <Span>{title}</Span>
          <Span>{prise}</Span>
        </PriseBlock>
        <StarContainer>
          {Array.from({ length: amountStars }, () => (
            <StarTwoTone twoToneColor="#ffd802" />
          ))}
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
