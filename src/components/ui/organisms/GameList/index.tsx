import { contentAPI } from "@/api/ContentAPI";
import { selectCurrentCard } from "@/redux/selectors/authSelector";
import { useCallback } from "react";
import { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import GameCard from "../../molecules/GameCard";
import { FlipContainer, Flipper, GamesBlock } from "./style";
import { amountFavoriteGame, TCardItem, TGameCard } from "./types";

export const CardItem: FC<TCardItem> = (props) => {
  const {
    title,
    price,
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
          price={price}
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
  const updateCard = useSelector(selectCurrentCard);
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
  }, [updateCard]);

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
