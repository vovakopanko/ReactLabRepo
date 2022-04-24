import { debouncedFetchData } from "@/api/SearchAPI";
import { CardItem } from "@/components/ui/organisms/GameList";
import { TGameCard } from "@/components/ui/organisms/GameList/types";
import { useEffect, useState } from "react";
import { EmptyList, GamesBlock, ProductList } from "../../styles";

type Props = {
  pageInfo: string;
  searchData: string;
};

const ProductsList = ({ pageInfo, searchData }: Props) => {
  const [gamesCards, setGamesCards] = useState<TGameCard[]>([]);

  useEffect(() => {
    debouncedFetchData(searchData, (res: TGameCard[]) => {
      const array: TGameCard[] = [];
      res
        .map((e) => e.imagePlatforms.map((a) => a.alt))
        .map((a) => a.includes(pageInfo))
        .filter((a, index) => {
          if (a === true) return array.push(res[index]);
        });
      setGamesCards(
        array.filter((item) =>
          item.title
            .toString()
            .toLowerCase()
            .startsWith(searchData.toLowerCase())
        )
        // .filter((a) => a.genres === `Shooter`)
        // .filter((a) => a.age === "12")
      );
    });
  }, [searchData]);

  if (!gamesCards)
    <div>
      <p style={{ color: "white", fontSize: 24 }}>Loading</p>
    </div>;

  return (
    <ProductList>
      {!gamesCards.length && <EmptyList>Nothing found!</EmptyList>}
      <GamesBlock>
        {gamesCards.map((item) => (
          <CardItem key={item.title} {...item} />
        ))}
      </GamesBlock>
    </ProductList>
  );
};

export default ProductsList;

//Criteria filter

// sort by stars
// array.sort(function (a, b) {
// return b.amountStars - a.amountStars; })
// sort by prise
// array.sort(function (a, b) {
//   return b.prise - a.prise;
// })
//sort by name
//.sort((a, b) => (a.title > b.title ? 1 : -1))
//---------------------------------------------

//Type filter

// sort by ascending
// array.sort(function (a, b) {
// return b.amountStars - a.amountStars; })
//sort by decreasing
// array.sort(function (a, b) {
// return a.amountStars - b.amountStars; })
//---------------------------------------------

//Age
// array.sort(function (a, b) {
//   return a.age - b.age;
// })
//---------------------------------------------

//Genres
// const games = array.filter((a) => a.genres === `${selectedGenres}`
//if (games) {
//    return null
//  }
