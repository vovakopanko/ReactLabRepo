import { contentAPI } from "@/api/ContentAPI";
import { SearchBar } from "@/components/ui";
import { CardItem } from "@/components/ui/organisms/GameList";
import { TGameCard } from "@/components/ui/organisms/GameList/types";
import AuthRedirect from "@/hoc/withAuthRedirect";
import { colors } from "@/styles/palette";
import { useEffect, useState } from "react";
import { Container } from "../Home/style";
import {
  BottomLine,
  EmptyList,
  FilterCategory,
  FilterContainer,
  GamesBlock,
  GenresContainer,
  NameCategory,
  PageContainer,
  ProductContainer,
  ProductList,
  ProductListContainer,
  ProductMediaContainer,
  ProductName,
  RadioField,
  RadioFieldTitle,
  SearchBarContainer,
  SelectedContainer,
  SelectionRadioFields,
  SortContainer,
  SortTitle,
} from "./styles";

const Product = ({ pageInfo }: { pageInfo: string }) => {
  const [gamesCards, setGamesCards] = useState<TGameCard[]>([]);

  useEffect(() => {
    const query = async () => {
      const games = await contentAPI
        .getGameCards()
        ?.then((response) => response);
      if (games) {
        const array: TGameCard[] = [];
        const getPlatforms = games.map((e) =>
          e.imagePlatforms.map((a) => a.alt)
        );
        const getCardForCurrenPlatform = getPlatforms.map((a) =>
          a.includes(pageInfo)
        );
        const getCardsWithCurrentPlatform = () =>
          getCardForCurrenPlatform.filter((a, index) => {
            if (a === true) return array.push(games[index]);
          });

        getCardsWithCurrentPlatform();
        setGamesCards(array);
      }
    };
    query();
  }, []);

  return (
    <AuthRedirect>
      <PageContainer>
        <ProductContainer>
          <FilterContainer>
            <ProductName>{pageInfo.toLocaleUpperCase()}</ProductName>
            <BottomLine />
            <FilterCategory>
              <NameCategory>Sort</NameCategory>
            </FilterCategory>
            <BottomLine />
            <div>
              <SortContainer>
                <SortTitle>Criteria</SortTitle>
                <SelectedContainer defaultValue={""}>
                  <option value="" disabled>
                    Choose a ...
                  </option>
                  <option value="name">Name</option>
                  <option value="stars">Stars</option>
                  <option value="price">Price</option>
                </SelectedContainer>
              </SortContainer>
              <SortContainer>
                <SortTitle>Type</SortTitle>
                <SelectedContainer defaultValue={""}>
                  <option value="" disabled>
                    Choose a ...
                  </option>
                  <option value="ascending">Ascending</option>
                  <option value="decreasing">Decreasing</option>
                </SelectedContainer>
              </SortContainer>
            </div>
            <FilterCategory>
              <NameCategory>Genres</NameCategory>
            </FilterCategory>
            <BottomLine />
            <SelectionRadioFields>
              <RadioField>
                <input type={"radio"} value={"A"} />
                <RadioFieldTitle>All genres</RadioFieldTitle>
              </RadioField>
              <RadioField>
                <input type={"radio"} value={"B"} />
                <RadioFieldTitle>Shooter</RadioFieldTitle>
              </RadioField>
              <RadioField>
                <input type={"radio"} value={"C"} />
                <RadioFieldTitle>Arcade</RadioFieldTitle>
              </RadioField>
              <RadioField>
                <input type={"radio"} value={"D"} />
                <RadioFieldTitle>Strategy</RadioFieldTitle>
              </RadioField>
              <RadioField>
                <input type={"radio"} value={"E"} />
                <RadioFieldTitle>Survive</RadioFieldTitle>
              </RadioField>
              <RadioField>
                <input type={"radio"} value={"F"} />
                <RadioFieldTitle>Fighting</RadioFieldTitle>
              </RadioField>
            </SelectionRadioFields>
            <GenresContainer
              style={{ display: "flex", flexDirection: "column" }}
            >
              <FilterCategory>
                <NameCategory>Age</NameCategory>
              </FilterCategory>
              <BottomLine />
              <RadioField>
                <input type={"radio"} value={"A"} />
                <RadioFieldTitle>All ages</RadioFieldTitle>
              </RadioField>
              <RadioField>
                <input type={"radio"} value={"B"} />
                <RadioFieldTitle>3+</RadioFieldTitle>
              </RadioField>
              <RadioField>
                <input type={"radio"} value={"C"} />
                <RadioFieldTitle>6+</RadioFieldTitle>
              </RadioField>
              <RadioField>
                <input type={"radio"} value={"D"} />
                <RadioFieldTitle>12+</RadioFieldTitle>
              </RadioField>
              <RadioField>
                <input type={"radio"} value={"F"} />
                <RadioFieldTitle>18+</RadioFieldTitle>
              </RadioField>
            </GenresContainer>
          </FilterContainer>
          <ProductMediaContainer>
            <SearchBarContainer>
              <Container>
                <SearchBar />
              </Container>
            </SearchBarContainer>
            <ProductListContainer>
              <FilterCategory>
                <NameCategory>Products</NameCategory>
              </FilterCategory>
              <BottomLine />
              <ProductList>
                {!gamesCards.length && (
                  <EmptyList
                    style={{
                      color: colors.WHITE,
                      alignSelf: "center",
                    }}
                  >
                    Nothing found!
                  </EmptyList>
                )}
                <GamesBlock>
                  {gamesCards.map((item) => (
                    <CardItem key={item.title} {...item} />
                  ))}
                </GamesBlock>
              </ProductList>
            </ProductListContainer>
          </ProductMediaContainer>
        </ProductContainer>
      </PageContainer>
    </AuthRedirect>
  );
};

export default Product;
