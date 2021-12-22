import styled from "styled-components";
import { colors } from "./../../styles/palette/index";

export const HeaderContent = styled.header`
  background-color: ${colors.BLACK};
  display: flex;
  align-items: center;
`;

export const HeaderRightBlock = styled.div`
  width: "40%";
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const DropDownIcon = styled.span`
  margin-left: 5;
  background-color: ${colors.WHITE};
`;

export const TitleBlock = styled.div`
  padding: 20px;
`;

export const Title = styled.span`
  font-size: 18px;
  color: ${colors.WHITE};
`;

export const HeaderLeftBlock = styled.div`
  width: 60%;
`;

export const TitleName = styled.p`
  color: ${colors.WHITE};
  font-size: 21px;
  padding-left: 16px;
`;

export const DropDownBlock = styled.div`
  position: absolute;
  top: 72px;
  right: 22%;
  width: 100px;
  padding: 1rem;
  overflow: hidden;
  z-index: 5;
  background-color: ${colors.BLACK};
`;
