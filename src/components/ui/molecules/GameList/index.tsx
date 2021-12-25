import { images } from "@/constants/image";
import { StarTwoTone } from "@ant-design/icons";
import Button from "../../atoms/Button";
import {
  AgeRestrictions,
  CardBackBlock,
  CardBlock,
  FlipContainer,
  Flipper,
  GameDescription,
  GamesBlock,
  Image,
  ImagePlatform,
  ImagePlatformContainer,
  PriseBlock,
  Span,
  StarContainer,
} from "./style";
import { CardItem, GameCard } from "./types";

const gamesCards: GameCard[] = [
  {
    id: 0,
    title: "OverWatch",
    prise: "23.99$",
    url: images.OVERWATCH,
    alt: "OverWatch",
    amountStars: 5,
    age: "12+",
    description: `Overwatch is a vibrant team game with a diverse cast of heroes.
    Travel the world, fight for objects and lead your team to victory in
    6v6 battles.`,
    isXbox: false,
    isPC: true,
    isPS: false,
  },
  {
    id: 1,
    title: "MineCraft",
    prise: "25.99$",
    url: images.MINECRAFT,
    alt: "MineCraft",
    amountStars: 4,
    age: "14+",
    description:
      "Minecraft is an indie sandbox computer game created by Swedish programmer Markus Persson and published by his company Mojang AB.",
    isXbox: true,
    isPC: true,
    isPS: true,
  },
  {
    id: 2,
    title: "Terraria",
    prise: "4.99$",
    url: images.TERRARIA,
    alt: "Terraria",
    amountStars: 5,
    age: "18+",
    description:
      "Terraria is a sandbox adventure computer game developed by the American studio Re-Logic. It was released in 2011 for Microsoft Windows computers and distributed through the digital distribution system Steam.",
    isXbox: true,
    isPC: true,
    isPS: true,
  },
];

const CardsItem = ({
  title,
  prise,
  url,
  alt,
  amountStars,
  description,
  age,
  isXbox,
  isPC,
  isPS,
}: CardItem) => {
  return (
    <FlipContainer>
      <Flipper>
        <CardBlock>
          <ImagePlatformContainer>
            {isXbox && (
              <ImagePlatform src={images.XBOX_LOGO} alt={"XboxLogo"} />
            )}
            {isPC && <ImagePlatform src={images.WINDOWS} alt={"PCLogo"} />}
            {isPS && <ImagePlatform src={images.PLAYSTATION} alt={"PSLogo"} />}
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
      </Flipper>
    </FlipContainer>
  );
};

const GameList = () => {
  return (
    <GamesBlock>
      {gamesCards.map(
        ({
          id,
          title,
          prise,
          url,
          alt,
          amountStars,
          description,
          age,
          isXbox,
          isPC,
          isPS,
        }: GameCard) => (
          <CardsItem
            key={id}
            title={title}
            prise={prise}
            url={url}
            alt={alt}
            amountStars={amountStars}
            description={description}
            age={age}
            isXbox={isXbox}
            isPC={isPC}
            isPS={isPS}
          />
        )
      )}
    </GamesBlock>
  );
};

export default GameList;
