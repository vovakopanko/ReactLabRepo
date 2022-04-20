import { colors } from "./../../styles/palette/index";
import styled from "styled-components";

export const PageContainer = styled.div`
  justify-content: center;
  font-size: 25;
`;

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

export const GenresContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterContainer = styled.div`
  width: 280px;
  border: 1px solid grey;
  border-radius: 25px;
  padding: 10px;
  margin: 10px;
  background: black;
  opacity: 0.8;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

export const ProductName = styled.h3`
  text-align: center;
  color: ${colors.WHITE};
  font-size: 24px;
  font-weight: 100;
  margin-bottom: 10px;
`;

export const BottomLine = styled.div`
  border-bottom: 1px solid ${colors.WHITE};
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const FilterCategory = styled.div`
  padding-left: 20px;
  padding-bottom: 10px;
  padding-top: 20px;
`;

export const NameCategory = styled.span`
  color: ${colors.WHITE};
  font-size: 21px;
`;

export const SortContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
`;

export const SortTitle = styled.span`
  align-self: center;
  color: ${colors.WHITE};
  font-size: 20px;
  width: 50%;
  padding-left: 10px;
`;

export const SelectedContainer = styled.select`
  width: 50%;
  height: 30px;
  background-color: ${colors.BLACK};
  color: ${colors.WHITE};
  border-color: ${colors.LIGHT_GRAY};
`;

export const SelectionRadioFields = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioField = styled.div`
  padding-left: 10px;
  padding-bottom: 5px;
`;

export const RadioFieldTitle = styled.span`
  color: ${colors.WHITE};
  font-size: 20px;
  padding-left: 5px;
`;

export const ProductMediaContainer = styled.div`
  width: 70%;
  margin: 10px;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProductListContainer = styled.div`
  margin: 20px;
  border-radius: 25px;
  border: 1px solid ${colors.GRAY};
  background-color: ${colors.BLACK};
  opacity: 0.8;
`;

export const ProductList = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 300px;
`;

export const EmptyList = styled.span`
  color: ${colors.WHITE};
  align-self: center;
`;
