import styled from "styled-components";
import { colors } from "../../../../styles/palette/index";

export const HeaderContainer = styled.header`
  height: 5vh;
  justify-content: space-between;
  background-color: ${colors.BLACK};
  display: flex;
  align-items: center;
`;

export const Menu = styled.div`
  width: "40%";
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Logo = styled.h1`
  font-weight: 400;
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
