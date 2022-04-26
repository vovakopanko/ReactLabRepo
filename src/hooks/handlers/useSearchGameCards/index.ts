import { debouncedFetchData } from "@/api/SearchAPI";
import { useEffect } from "react";
import { useState } from "react";
import { TGameCard } from "@/components/ui/organisms/GameList/types";

type Props = {
  pageInfo: string;
  searchData: string;
  age: string;
  genres: string;
  criteria: string | number;
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

  useEffect(() => {
    setIsLoading(true);
    debouncedFetchData(searchData, (res: TGameCard[]) => {
      const array: TGameCard[] = [];
      res
        .map((e) => e.imagePlatforms.map((a) => a.alt))
        .map((a) => a.includes(pageInfo))
        .filter((a, index) => {
          if (a === true) return array.push(res[index]);
        });
      setGamesCards(
        array
          .filter((item) => {
            const findByGenres =
              genres === "All" ? true : item.genres === genres;
            const findByAge =
              age === "All" ? true : item.age.toString() === age;
            const findByTitle = item.title
              .toString()
              .toLowerCase()
              .startsWith(searchData.toLowerCase());

            return findByTitle && findByGenres && findByAge;
          })
          .sort(function (a, b) {
            const priseFilter =
              criteria === "price"
                ? type === "ascending"
                  ? a.prise - b.prise
                  : b.prise - a.prise
                : type === "decreasing"
                ? b.prise - a.prise
                : a.prise - b.prise;
            return priseFilter;
          })
          .sort(function (a, b) {
            const nameFilter =
              criteria === "name"
                ? type === "ascending"
                  ? a.title > b.title
                    ? -1
                    : 1
                  : a.title > b.title
                  ? 1
                  : -1
                : type === "decreasing"
                ? a.title > b.title
                  ? 1
                  : -1
                : a.title > b.title
                ? -1
                : 1;
            return nameFilter;
          })
          .sort(function (a, b) {
            const ageFilter =
              criteria === "age"
                ? type === "ascending"
                  ? a.age - b.age
                  : b.age - a.age
                : type === "decreasing"
                ? b.age - a.age
                : a.age - b.age;
            return ageFilter;
          })
      );
    });
    let timerId = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchData, pageInfo, age, genres, type, criteria]);
  return {
    isLoading,
    gamesCards,
  };
};

export default useSearchGameCards;
