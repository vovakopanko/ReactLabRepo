import Spinner from "@/components/ui/atoms/Spinner";
import { CardItem } from "@/components/ui/organisms/GameList";
import { EmptyList, GamesBlock, ProductList } from "../../styles";
import { Props } from "./types";

const ProductsList = ({ gamesCards, isLoading }: Props) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ProductList>
      <GamesBlock>
        {gamesCards.length ? (
          gamesCards.map((item) => <CardItem key={item.title} {...item} />)
        ) : (
          <EmptyList>Nothing found!</EmptyList>
        )}
      </GamesBlock>
    </ProductList>
  );
};

export default ProductsList;
