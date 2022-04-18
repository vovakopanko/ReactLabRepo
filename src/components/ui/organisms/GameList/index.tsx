import { contentAPI } from "@/api/ContentAPI";
import { useCallback } from "react";
import { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import GameCard from "../../molecules/GameCard";
import { FlipContainer, Flipper, GamesBlock } from "./style";
import { amountFavoriteGame, TCardItem, TGameCard } from "./types";

export const CardItem: FC<TCardItem> = (props) => {
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
      const games = await contentAPI
        .getGameCards()
        ?.then((response) => response);
      if (games) {
        setGamesCards(games);
      }
    };
    query();
  }, []);

  return (
    <GamesBlock>
      {gamesCards.map(
        (item, index) =>
          index + 1 <= amountFavoriteGame.STANDARTSHEME && (
            <CardItem key={item.title} {...item} />
          )
      )}
    </GamesBlock>
  );
};

export default GameList;
