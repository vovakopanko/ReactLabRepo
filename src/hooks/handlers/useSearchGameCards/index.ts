import { selectCurrentCard } from "./../../../redux/selectors/authSelector/index";
import { useSelector } from "react-redux";
import { debouncedFetchData } from "@/api/SearchAPI";
import { useEffect } from "react";
import { useState } from "react";
import { TGameCard } from "@/components/ui/organisms/GameList/types";
import searchGameCard from "@/hooks/helpers";
import { Criteria } from "@/pages/Product/types";

type Props = {
  pageInfo: string;
  searchData: string;
  age: string;
  genres: string;
  criteria: Criteria;
  type: string;
};

const useSearchGameCards = ({
  searchData,
  pageInfo,
  age,
  genres,
  criteria,
  type,
}: Props) => {
  const [gamesCards, setGamesCards] = useState<TGameCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const updateCard = useSelector(selectCurrentCard);

  useEffect(() => {
    setIsLoading(true);
    debouncedFetchData(searchData, (res: TGameCard[]) => {
      const array: TGameCard[] = [];
      res
        .map((card) => card.imagePlatforms.map((platform) => platform.alt))
        .map((alt, index) => {
          if (alt.includes(pageInfo)) {
            array.push(res[index]);
          }
        });
      const filteredArray = searchGameCard(array, searchData, {
        age,
        genres,
        type,
        criteria,
      });

      setGamesCards(filteredArray);
    });
    let timerId = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchData, pageInfo, age, genres, type, criteria, updateCard]);
  return {
    isLoading,
    gamesCards,
  };
};

export default useSearchGameCards;
