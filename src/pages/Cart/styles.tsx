import { colors } from "@/styles/palette";
import styled from "styled-components";

type StyledProps = {
  width: TitleType;
};

type TitleType = "35%" | "15%" | "10%" | string;

type Data = {
  data: number;
};

export const CartComponent = styled.div<Data>`
  padding-top: 10px;
  padding-left: 40px;
  padding-right: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  backdrop-filter: ${(props) => (props.data ? `blur(3px) grayscale(0.5)` : "")};
`;

export const Test = styled.div`
  width: 100%;
`;

export const PageTitle = styled.h2`
  padding-left: 30px;
  font-size: 21px;
  font-weight: 400;
  color: ${colors.WHITE};
`;

export const PageTitleBlock = styled.div`
  width: 100%;
`;

export const MobileBlock = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SubTitleBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SubTitle = styled.div<StyledProps>`
  color: ${colors.GRAY};
  font-size: 19px;
  width: ${(props) => props.width};
`;

export const ItemName = styled.div<StyledProps>`
  width: ${(props) => props.width};
  @media (max-width: 768px) {
    padding: 10px;
    width: 100%;
  }
`;

export const TitleStyle = styled.span`
  color: ${colors.WHITE};
  font-size: 17px;
  @media (max-width: 768px) {
    font-size: 21px;
  }
`;

export const CheckBoxContainer = styled.div`
  width: 15%;
`;

export const CheckBox = styled.input`
  &:hover {
    cursor: pointer;
  }
`;

export const CheckBoxField = styled.div`
  width: 15%;
`;

export const RemoveBtnBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
`;

export const BtnWrapper = styled.div`
  width: 15%;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BtnBlock = styled.div`
  display: flex;
  width: 25%;
  padding-bottom: 10px;
`;

export const TotalCoast = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TotalCoastContainer = styled.div`
  color: ${colors.WHITE};
`;

export const TotalCoastTitle = styled.span`
  color: ${colors.WHITE};
  font-size: 21px;
`;

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const TotalCoastSubTitle = styled.span`
  font-size: 18px;
`;

export const CoastContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonBuyContainer = styled.div`
  width: 15%;
  padding-bottom: 10px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AmountBlock = styled.div`
  width: 10%;
`;

export const InputAmount = styled.input`
  color: ${colors.WHITE};
  font-size: 18px;
  height: 25px;
  background-color: ${colors.BLACK};
  width: 2em;
  text-align: center;
`;
