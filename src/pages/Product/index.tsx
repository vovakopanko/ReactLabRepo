import { contentAPI } from "@/api/ContentAPI";
import { SearchBar } from "@/components/ui";
// import { GamesBlock } from "@/components/ui/molecules/GameCard/style";
import { CardItem } from "@/components/ui/organisms/GameList";
import { TGameCard } from "@/components/ui/organisms/GameList/types";
import AuthRedirect from "@/hoc/withAuthRedirect";
import { colors } from "@/styles/palette";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../Home/style";
import { PageContainer } from "./styles";

const Product = ({ pageInfo }: { pageInfo: string }) => {
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

  console.log(gamesCards);
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
                <SelectedContainer>
                  <option value="name">Name</option>
                  <option value="stars">Stars</option>
                  <option selected value="price">
                    Price
                  </option>
                </SelectedContainer>
              </SortContainer>
              <SortContainer>
                <SortTitle>Type</SortTitle>
                <SelectedContainer>
                  <option value="name">Ascending</option>
                  <option value="stars">Decreasing</option>
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
                <RadioFieldTitle>Survive</RadioFieldTitle>
              </RadioField>
            </SelectionRadioFields>

            <div style={{ display: "flex", flexDirection: "column" }}>
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
            </div>
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
                      // justifyContent: 'inherit'
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

export const GamesBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  @media (max-width: 1550px) {
    justify-content: space-around;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FilterContainer = styled.div`
  width: 280px;
  border: 1px solid grey;
  border-radius: 25px;
  padding: 10px;
  margin: 10px;
  background: black;
  opacity: 0.8;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const ProductName = styled.h3`
  text-align: center;
  color: ${colors.WHITE};
  font-size: 24px;
  font-weight: 100;
  margin-bottom: 10px;
`;

const BottomLine = styled.div`
  border-bottom: 1px solid ${colors.WHITE};
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const FilterCategory = styled.div`
  padding-left: 20px;
  padding-bottom: 10px;
  padding-top: 20px;
`;

const NameCategory = styled.span`
  color: ${colors.WHITE};
  font-size: 21px;
`;

const SortContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

const SortTitle = styled.span`
  align-self: center;
  color: ${colors.WHITE};
  font-size: 20px;
  width: 50%;
  padding-left: 10px;
`;

const SelectedContainer = styled.select`
  width: 50%;
  height: 30px;
  background-color: ${colors.BLACK};
  color: ${colors.WHITE};
  border-color: ${colors.LIGHT_GRAY};
`;

const SelectionRadioFields = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioField = styled.div`
  padding-left: 10px;
  padding-bottom: 5px;
`;

const RadioFieldTitle = styled.span`
  color: ${colors.WHITE};
  font-size: 20px;
  padding-left: 5px;
`;

const ProductMediaContainer = styled.div`
  width: 70%;
  margin: 10px;
`;

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProductListContainer = styled.div`
  margin: 20px;
  border-radius: 25px;
  border: 1px solid ${colors.GRAY};
  background-color: ${colors.BLACK};
  opacity: 0.8;
`;

const ProductList = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 300px;
`;

const EmptyList = styled.span`
  color: ${colors.WHITE};
  align-self: center;
`;

export default Product;
