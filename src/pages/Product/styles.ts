import { colors } from "./../../styles/palette/index";
import styled from "styled-components";

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

export const FlexContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const FilterContainer = styled.div`
  min-width: 368px;
  @media (max-width: 1550px) {
    min-width: 300px;
  }
  @media (max-width: 1200px) {
    min-width: 300px;
  }
  @media (max-width: 768px) {
    width: 60%;
    min-width: 320px;
    justify-content: center;
    align-self: center;
  }
`;

export const FilterBlock = styled.div`
  border: 1px solid ${colors.GRAY};
  border-radius: 25px;
  padding: 10px;
  margin: 10px;
  background: ${colors.BLACK};
  opacity: 0.8;
`;

export const ProductContainer = styled.div`
  font-size: 25;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  @media (max-width: 1550px) {
    flex-direction: row;
    justify-content: center;
  }
  @media (max-width: 1200px) {
    flex-direction: row;
    justify-content: center;
  }
  @media (max-width: 768px) {
    min-width: 320px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ProductName = styled.h3`
  text-align: center;
  color: ${colors.WHITE};
  font-size: 24px;
  font-weight: 100;
  margin-bottom: 10px;
`;

export const BottomLine = styled.div`
  border-bottom: 1px solid ${colors.LIGHT_GRAY};
  margin-left: 10px;
  margin-right: 10px;
`;

export const BottomTitleLine = styled.div`
  border-bottom: 2px solid ${colors.WHITE};
  margin-left: 20px;
  margin-right: 20px;
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
  margin-top: 10px;
  display: flex;
  padding-right: 10px;
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
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;
  @media (max-width: 768px) {
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ProductListContainer = styled.div`
  border-radius: 25px;
  border: 1px solid ${colors.GRAY};
  background-color: ${colors.BLACK};
  opacity: 0.96;
  @media (max-width: 768px) {
    width: 100%;
    min-width: 300px;
  }
`;

export const ProductList = styled.div`
  justify-content: center;
  align-self: center;
  min-height: 340px;
`;

export const EmptyList = styled.span`
  display: flex;
  justify-content: center;
  align-self: center;
  color: ${colors.WHITE};
  font-size: 25px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    min-width: 320px;
    flex-direction: column;
  }
`;

export const CreateButtonContainer = styled.div`
  margin-top: 2.5px;
  margin-left: 5px;
  margin-bottom: 22.5px;
`;

export const StyleInput = styled.input`
  width: 80%;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-left: 10px;
  border: 1px solid ${colors.WHITE};
  height: 40px;
  background-color: ${colors.BLACK};
  opacity: 0.91;
  border-radius: 15px;
  font-size: 19px;
  font-weight: 300;
  color: ${colors.WHITE};
  @media (max-width: 768px) {
    min-width: 280px;
    margin-bottom: 10px;
  }
`;
