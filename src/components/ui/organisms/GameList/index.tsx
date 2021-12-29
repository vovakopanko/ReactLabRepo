import { images } from "@/constants/image";
import { useCallback } from "react";
import { FC } from "react";
import { useState } from "react";
import GameCard from "../../molecules/GameCard";
import { FlipContainer, Flipper, GamesBlock } from "./style";
import { TCardItem, TGameCard } from "./types";

const gamesCards: TGameCard[] = [
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
    imagePlatforms: [{ src: images.WINDOWS, alt: "PCLogo" }],
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
    imagePlatforms: [
      { src: images.XBOX_LOGO, alt: "XboxLogo" },
      { src: images.WINDOWS, alt: "PCLogo" },
      { src: images.PLAYSTATION, alt: "PSLogo" },
    ],
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
    imagePlatforms: [
      { src: images.WINDOWS, alt: "PCLogo" },
      { src: images.PLAYSTATION, alt: "PSLogo" },
    ],
  },
];

const CardItem: FC<TCardItem> = (props) => {
  const {
    title,
    prise,
    url,
    alt,
    amountStars,
    description,
    age,
    imagePlatforms,
  } = props;
  const [focused, setFocused] = useState(false);

  const onMouseEnter = useCallback(() => setFocused(true), []);
  const onMouseLeave = useCallback(() => setFocused(false), []);

  return (
    <FlipContainer onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Flipper focused={focused}>
        <GameCard
          title={title}
          prise={prise}
          url={url}
          alt={alt}
          amountStars={amountStars}
          description={description}
          age={age}
          imagePlatforms={imagePlatforms}
        />
      </Flipper>
    </FlipContainer>
  );
};

const GameList: FC = () => {
  return (
    <GamesBlock>
      {gamesCards.map((item) => (
        <CardItem key={item.id} {...item} />
      ))}
    </GamesBlock>
  );
};

export default GameList;
