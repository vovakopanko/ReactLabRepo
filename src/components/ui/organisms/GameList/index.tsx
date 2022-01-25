import { searchAPI } from "@/api/SearchAPI";
import { useCallback } from "react";
import { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import GameCard from "../../molecules/GameCard";
import { FlipContainer, Flipper, GamesBlock } from "./style";
import { TCardItem, TGameCard } from "./types";

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
  const [gamesCards, setGamesCards] = useState<TGameCard[]>([]);

  useEffect(() => {
    const query = async () => {
      const games = await searchAPI.getGameCards("");
      setGamesCards(games);
    };
    query();
  }, []);

  return (
    <GamesBlock>
      {gamesCards
        .map((item) => <CardItem key={item.id} {...item} />)
        .slice(0, 3)}
    </GamesBlock>
  );
};

export default GameList;
