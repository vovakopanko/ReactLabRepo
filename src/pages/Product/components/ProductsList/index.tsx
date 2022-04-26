import Spinner from "@/components/ui/atoms/Spinner";
import { CardItem } from "@/components/ui/organisms/GameList";
import { TGameCard } from "@/components/ui/organisms/GameList/types";
import { EmptyList, GamesBlock, ProductList } from "../../styles";

type Props = {
  gamesCards: TGameCard[];
  isLoading: boolean;
};

const ProductsList = ({ gamesCards, isLoading }: Props) => {
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ProductList>
      <GamesBlock>
        {!gamesCards.length && <EmptyList>Nothing found!</EmptyList>}
        {gamesCards.map((item) => (
          <CardItem key={item.title} {...item} />
        ))}
      </GamesBlock>
    </ProductList>
  );
};

export default ProductsList;
