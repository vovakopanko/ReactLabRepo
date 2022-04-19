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
import OnClick from "../../atoms/onClick";
import { colors } from "@/styles/palette";

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
        <PriseBlock>
          <Span>{title}</Span>
          <Span>{prise}</Span>
        </PriseBlock>
        <StarContainer>
          {starsCount.map((_, index) => {
            return <StarTwoTone key={index} twoToneColor="#ffd802" />;
          })}
        </StarContainer>
      </CardBlock>
      <CardBackBlock>
        <GameDescription>{description}</GameDescription>
        <AgeRestrictions>{age}</AgeRestrictions>
        <OnClick
          title={"Add to cart"}
          color={colors.LIGHT_GRAY}
          width={"40%"}
        />
      </CardBackBlock>
    </>
  );
};

export default GameCard;
