import { images } from "@/constants/image";
import { StarOutlined } from "@ant-design/icons";
import {
  AgeRestrictions,
  Button,
  CardBackBlock,
  CardBlock,
  FlipContainer,
  Flipper,
  GameDescription,
  GamesBlock,
  ImageLogo,
  PriseBlock,
  Span,
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
}: CardItem) => {
  return (
    <FlipContainer>
      <Flipper>
        <CardBlock>
          <ImageLogo src={url} alt={alt} />
          <PriseBlock>
            <Span>{title}</Span>
            <Span>{prise}</Span>
          </PriseBlock>
          <div>
            {Array.from({ length: amountStars }, () => (
              <StarOutlined />
            ))}
          </div>
        </CardBlock>
        <CardBackBlock>
          <GameDescription>{description}</GameDescription>
          <AgeRestrictions>{age}</AgeRestrictions>
          <Button>Add to cart</Button>
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
          />
        )
      )}
    </GamesBlock>
  );
};

export default GameList;
