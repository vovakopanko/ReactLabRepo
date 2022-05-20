import { TGameCard } from "@/components/ui/organisms/GameList/types";
import { Criteria } from "@/pages/Product/types";

type FilterOptions = {
  criteria: Criteria;
  age: string;
  genres: string;
  type: string;
};

const searchGameCard = (
  data: TGameCard[],
  searchData: string,
  filterOptions: FilterOptions
) => {
  const { age, genres, type, criteria } = filterOptions;

  const filteredArray = data.filter((item) => {
    const findByGenres = genres === "All" ? true : item.genres === genres;
    const findByAge = age === "All" ? true : item.age.toString() === age;
    const findByTitle = item.title
      .toString()
      .toLowerCase()
      .startsWith(searchData.toLowerCase());

    return findByTitle && findByGenres && findByAge;
  });

  return criteria === "default"
    ? filteredArray
    : filteredArray.sort(function (a: TGameCard, b: TGameCard) {
        const isIncreasing = type === "ascending";

        return isIncreasing
          ? a[criteria] > b[criteria]
            ? 1
            : -1
          : b[criteria] > a[criteria]
          ? 1
          : -1;
      });
};

export default searchGameCard;
